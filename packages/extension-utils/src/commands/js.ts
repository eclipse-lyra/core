import {
    registerAll,
    commandRegistry,
    workspaceService,
    toastError,
    toastInfo,
} from "@eclipse-lyra/core";
import { getTextFileFromPath, readTextFile } from "../shared";

async function getScriptUrl(params: { script?: string; code?: string }): Promise<string | null> {
  if (params.code?.trim()) {
    return URL.createObjectURL(new Blob([params.code], { type: "application/javascript" }));
  }
  if (!params.script) {
    toastError("Provide 'script' (file path) or 'code'.");
    return null;
  }
  const workspace = await workspaceService.getWorkspace();
  if (!workspace) {
    toastError("No workspace selected.");
    return null;
  }
  const file = await getTextFileFromPath(params.script);
  if (!file) return null;
  const uri = await file.getContents({ uri: true }).catch(() => null);
  if (typeof uri === "string" && uri.startsWith("blob:")) return uri;
  const content = await readTextFile(file);
  return content ? URL.createObjectURL(new Blob([content], { type: "application/javascript" })) : null;
}

function runWorker(url: string): Promise<unknown> {
  const worker = new Worker(url);
  const cleanup = () => {
    worker.terminate();
    URL.revokeObjectURL(url);
  };
  return new Promise((resolve, reject) => {
    worker.onmessage = (e) => {
      cleanup();
      resolve(e.data);
    };
    worker.onerror = (e) => {
      cleanup();
      reject(new Error(e.message ?? String(e)));
    };
  });
}

registerAll({
  command: {
    id: "js",
    name: "Run JavaScript file",
    description: "Runs a script in a Web Worker. Use self.postMessage(value) to return a result.",
    parameters: [
      { name: "script", description: "workspace path to a .js file", required: false },
      { name: "code", description: "inline JavaScript", required: false }
    ]
  },
  handler: {
    execute: async (context: any) => {
      const url = await getScriptUrl(context.params ?? {});
      if (!url) return;
      try {
        const result = await runWorker(url);
        if (result !== undefined) toastInfo(String(result));
        return result;
      } catch (err: any) {
        toastError(err?.message ?? String(err));
      }
    }
  }
});

