import { registerAll, toastError } from "@eclipse-lyra/core";
import { getTextFileFromPath, readTextFile } from "../shared";

registerAll({
  command: {
    id: "wc",
    name: "Word count",
    description: "Counts lines, words, and characters in a file",
    parameters: [
      {
        name: "path",
        description: "the path of the file to analyze",
        required: true
      }
    ],
    output: [
      {
        name: "lines",
        description: "number of lines in the file"
      },
      {
        name: "words",
        description: "number of words in the file"
      },
      {
        name: "characters",
        description: "number of characters in the file"
      }
    ]
  },
  handler: {
    execute: async ({ params }: any) => {
      const path = params?.path;
      if (!path) {
        toastError("No file path provided.");
        return;
      }

      const file = await getTextFileFromPath(path);
      if (!file) {
        return;
      }

      const contents = await readTextFile(file);
      if (!contents) {
        return;
      }

      const lines = contents.split("\n");
      const lineCount = lines.length;
      const trimmed = contents.trim();
      const wordCount = trimmed === "" ? 0 : trimmed.split(/\s+/).filter(w => w.length > 0).length;
      const charCount = contents.length;

      return {
        lines: lineCount,
        words: wordCount,
        characters: charCount
      };
    }
  }
});

