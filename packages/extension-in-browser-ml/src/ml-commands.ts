import { registerAll, type ExecutionContext } from "@eclipse-docks/core";
import { inBrowserMLService } from "./in-browser-ml-service";
import { MLTask, MLModel, getModelForTask } from "./ml-models";
import { createLogger } from "@eclipse-docks/core";
import { workspaceService, File } from "@eclipse-docks/core";

const logger = createLogger('MLCommands');

const OBJECT_DETECTION_PARAMS = [
    { name: "imageUrl", description: "URL or workspace path of the image to analyze. Can be a URL (http://, https://, data:), a workspace file path (e.g., 'screenshot.png' or 'images/photo.jpg'), or any accessible image URL.", type: "string", required: true },
    { name: "filterClasses", description: "Optional array of object class names to filter results (e.g., ['tree', 'building']). If not provided, returns all detected objects.", type: "array", required: false },
    { name: "minConfidence", description: "Minimum confidence score (0-1) for detected objects. Default: 0.5", type: "number", required: false }
] as const;

const OBJECT_DETECTION_OUTPUT = [
    { name: "objects", description: "Array of detected objects with label, confidence, and bounding box coordinates" },
    { name: "filteredCount", description: "Number of objects after filtering (if filterClasses was provided)" }
] as const;

async function runObjectDetection(
    imageUrl: string,
    filterClasses: string[],
    minConfidence: number,
    model: MLModel
): Promise<{ objects: any[]; filteredCount: number; totalDetected: number } | { error: string }> {
    const detector = await inBrowserMLService.getPipeline(MLTask.OBJECT_DETECTION, model);
    const imageInput = await loadImageInput(imageUrl);
    try {
        const results = (await detector(imageInput.input)) as Array<{ label: string; score: number; box: { xmin: number; ymin: number; xmax: number; ymax: number } }>;
        if (imageInput.cleanup) imageInput.cleanup();

        let objects = results.map((result: any) => ({
            label: result.label,
            confidence: result.score,
            bbox: { xmin: result.box.xmin, ymin: result.box.ymin, xmax: result.box.xmax, ymax: result.box.ymax },
            center: { x: (result.box.xmin + result.box.xmax) / 2, y: (result.box.ymin + result.box.ymax) / 2 }
        })).filter((obj: any) => obj.confidence >= minConfidence);

        if (filterClasses.length > 0) {
            const filterLower = filterClasses.map((c: string) => c.toLowerCase());
            objects = objects.filter((obj: any) =>
                filterLower.some((filter: string) => obj.label.toLowerCase().includes(filter))
            );
        }
        return { objects, filteredCount: objects.length, totalDetected: results.length };
    } finally {
        if (imageInput.cleanup) imageInput.cleanup();
    }
}

/**
 * Commands for in-browser ML tasks that can be used by the LLM
 * These commands expose ML service capabilities as tools
 */

/**
 * Run object detection on an image
 * Useful for detecting objects like trees, buildings, vehicles, etc. in aerial imagery or photos
 */
registerAll({
    command: {
        id: "detect_objects_in_image",
        name: "Detect objects in image",
        description: "Detects objects in an image using computer vision. Returns bounding boxes with object labels and confidence scores. Useful for extracting positions of objects like trees, buildings, vehicles, etc. from aerial imagery or photos.",
        parameters: [...OBJECT_DETECTION_PARAMS],
        output: [...OBJECT_DETECTION_OUTPUT]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            const imageUrl = context.params?.imageUrl;
            if (!imageUrl) return { error: "imageUrl parameter is required" };
            try {
                return await runObjectDetection(
                    imageUrl,
                    context.params?.filterClasses || [],
                    context.params?.minConfidence ?? 0.5,
                    MLModel.OBJECT_DETECTION
                );
            } catch (error: any) {
                logger.error(`Object detection failed: ${error.message}`);
                return { error: `Object detection failed: ${error.message}` };
            }
        }
    }
});

/**
 * Run object detection on an image using YOLOv9 (yolov9-web)
 * Same interface as Detect objects in image but uses Xenova YOLOv9 web model
 */
registerAll({
    command: {
        id: "detect_objects_in_image_yolo",
        name: "Detect objects in image (YOLO)",
        description: "Detects objects in an image using YOLOv9 (yolov9-web). Returns bounding boxes with object labels and confidence scores. Use when you prefer the YOLO model over the default DETR detector.",
        parameters: [...OBJECT_DETECTION_PARAMS],
        output: [...OBJECT_DETECTION_OUTPUT]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            const imageUrl = context.params?.imageUrl;
            if (!imageUrl) return { error: "imageUrl parameter is required" };
            try {
                return await runObjectDetection(
                    imageUrl,
                    context.params?.filterClasses || [],
                    context.params?.minConfidence ?? 0.5,
                    MLModel.OBJECT_DETECTION_YOLOV9
                );
            } catch (error: any) {
                logger.error(`Object detection (YOLO) failed: ${error.message}`);
                return { error: `Object detection (YOLO) failed: ${error.message}` };
            }
        }
    }
});

/**
 * Classify an image
 * Useful for determining what type of scene or object is in an image
 */
registerAll({
    command: {
        "id": "classify_image",
        "name": "Classify image",
        "description": "Classifies an image into predefined categories. Returns top predictions with confidence scores.",
        "parameters": [
            {
                "name": "imageUrl",
                "description": "URL or workspace path of the image to classify. Can be a URL (http://, https://, data:), a workspace file path (e.g., 'screenshot.png' or 'images/photo.jpg'), or any accessible image URL.",
                "type": "string",
                "required": true
            },
            {
                "name": "topK",
                "description": "Number of top predictions to return. Default: 5",
                "type": "number",
                "required": false
            }
        ],
        "output": [
            {
                "name": "predictions",
                "description": "Array of predictions with label and confidence score"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const imageUrl = context.params?.imageUrl;
                if (!imageUrl) {
                    return { error: "imageUrl parameter is required" };
                }

                const topK = context.params?.topK ?? 5;

                const classifier = await inBrowserMLService.getPipeline(
                    MLTask.IMAGE_CLASSIFICATION,
                    MLModel.IMAGE_CLASSIFICATION
                );

                const imageInput = await loadImageInput(imageUrl);
                const results = await classifier(imageInput.input);
                
                // Clean up object URL if we created one
                if (imageInput.cleanup) {
                    imageInput.cleanup();
                }

                const resultsArr = results as Array<{ label: string; score: number }>;
                const predictions = resultsArr
                    .slice(0, topK)
                    .map((result: any) => ({
                        label: result.label,
                        confidence: result.score
                    }));

                return { predictions };
            } catch (error: any) {
                logger.error(`Image classification failed: ${error.message}`);
                return { error: `Image classification failed: ${error.message}` };
            }
        }
    }
});

/**
 * Run text classification or sentiment analysis
 */
registerAll({
    command: {
        "id": "classify_text",
        "name": "Classify text",
        "description": "Classifies text into categories or analyzes sentiment. Returns classification results with confidence scores.",
        "parameters": [
            {
                "name": "text",
                "description": "Text to classify",
                "type": "string",
                "required": true
            },
            {
                "name": "task",
                "description": "Classification task: 'text-classification' for general classification, 'sentiment-analysis' for sentiment. Default: 'text-classification'",
                "type": "string",
                "required": false,
                "allowedValues": ["text-classification", "sentiment-analysis"]
            }
        ],
        "output": [
            {
                "name": "predictions",
                "description": "Array of predictions with label and confidence score"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const text = context.params?.text;
                if (!text) {
                    return { error: "text parameter is required" };
                }

                const taskType = context.params?.task || "text-classification";
                const task = taskType === "sentiment-analysis" 
                    ? MLTask.SENTIMENT_ANALYSIS 
                    : MLTask.TEXT_CLASSIFICATION;

                const classifier = await inBrowserMLService.getPipeline(
                    task,
                    getModelForTask(task) || MLModel.TEXT_CLASSIFICATION
                );

                const results = await classifier(text);

                // Handle different result formats
                const res = results as Array<{ label?: string; class?: string; classification?: string; score?: number; confidence?: number }> | { label?: string; class?: string; classification?: string; score?: number; confidence?: number };
                const predictions = Array.isArray(res)
                    ? res.map((r: any) => ({
                        label: r.label || r.class || r.classification,
                        confidence: r.score ?? r.confidence ?? 0
                    }))
                    : [{
                        label: res.label || res.class || res.classification,
                        confidence: res.score ?? res.confidence ?? 0
                    }];

                return { predictions };
            } catch (error: any) {
                logger.error(`Text classification failed: ${error.message}`);
                return { error: `Text classification failed: ${error.message}` };
            }
        }
    }
});

/**
 * Extract named entities from text
 */
registerAll({
    command: {
        "id": "extract_entities",
        "name": "Extract named entities",
        "description": "Extracts named entities (people, organizations, locations, etc.) from text using named entity recognition.",
        "parameters": [
            {
                "name": "text",
                "description": "Text to analyze for named entities",
                "type": "string",
                "required": true
            }
        ],
        "output": [
            {
                "name": "entities",
                "description": "Array of extracted entities with label, word, start, and end positions"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const text = context.params?.text;
                if (!text) {
                    return { error: "text parameter is required" };
                }

                const ner = await inBrowserMLService.getPipeline(
                    MLTask.TOKEN_CLASSIFICATION,
                    MLModel.TOKEN_CLASSIFICATION
                );

                const results = (await ner(text)) as Array<{ entity: string; word: string; score: number; start: number; end: number }>;

                const entities = results.map((result: any) => ({
                    entity: result.entity,
                    word: result.word,
                    score: result.score,
                    start: result.start,
                    end: result.end
                }));

                return { entities };
            } catch (error: any) {
                logger.error(`Entity extraction failed: ${error.message}`);
                return { error: `Entity extraction failed: ${error.message}` };
            }
        }
    }
});

/**
 * Answer questions based on a context text
 */
registerAll({
    command: {
        "id": "answer_question",
        "name": "Answer question from context",
        "description": "Answers a question based on provided context text using question-answering model.",
        "parameters": [
            {
                "name": "question",
                "description": "The question to answer",
                "type": "string",
                "required": true
            },
            {
                "name": "context",
                "description": "The context text to search for the answer",
                "type": "string",
                "required": true
            }
        ],
        "output": [
            {
                "name": "answer",
                "description": "The answer to the question"
            },
            {
                "name": "score",
                "description": "Confidence score of the answer"
            },
            {
                "name": "start",
                "description": "Start position of the answer in the context"
            },
            {
                "name": "end",
                "description": "End position of the answer in the context"
            }
        ]
    },
    handler: {
        execute: async (context: ExecutionContext) => {
            try {
                const question = context.params?.question;
                const contextText = context.params?.context;

                if (!question || !contextText) {
                    return { error: "question and context parameters are required" };
                }

                const qa = await inBrowserMLService.getPipeline(
                    MLTask.QUESTION_ANSWERING,
                    MLModel.QUESTION_ANSWERING
                );

                const result = (await qa(question, contextText)) as { answer: string; score: number; start: number; end: number };

                return {
                    answer: result.answer,
                    score: result.score,
                    start: result.start,
                    end: result.end
                };
            } catch (error: any) {
                logger.error(`Question answering failed: ${error.message}`);
                return { error: `Question answering failed: ${error.message}` };
            }
        }
    }
});

/**
 * Result type for image input loading
 */
interface ImageInput {
    input: string | Blob | HTMLImageElement;
    cleanup?: () => void;
}

/**
 * Helper function to load an image input from a URL or workspace path
 * Returns the input in a format transformers.js can accept (URL string, Blob, or Image element)
 * Also returns a cleanup function for object URLs that need to be revoked
 */
async function loadImageInput(urlOrPath: string): Promise<ImageInput> {
    // Check if it's a URL (http://, https://, or data:)
    if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://') || urlOrPath.startsWith('data:')) {
        // Pass URL directly to transformers.js - it will handle loading
        return { input: urlOrPath };
    }
    
    // Assume it's a workspace path
    try {
        const workspace = await workspaceService.getWorkspace();
        if (!workspace) {
            throw new Error("No workspace available");
        }
        
        const file = await workspace.getResource(urlOrPath) as File;
        if (!file) {
            throw new Error(`File not found in workspace: ${urlOrPath}`);
        }
        
        // Get file as blob - transformers.js accepts Blob directly
        const blob = await file.getContents({ blob: true }) as Blob;
        if (!blob) {
            throw new Error(`Failed to read file as blob: ${urlOrPath}`);
        }
        
        // Create object URL for the blob (transformers.js can use blob URLs)
        const objectUrl = URL.createObjectURL(blob);
        
        return {
            input: objectUrl, // Pass object URL to transformers.js
            cleanup: () => URL.revokeObjectURL(objectUrl) // Cleanup function to revoke URL after processing
        };
    } catch (error: any) {
        throw new Error(`Failed to load image from workspace path ${urlOrPath}: ${error.message}`);
    }
}

