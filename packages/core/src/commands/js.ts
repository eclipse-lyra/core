import { registerAll } from '../core/commandregistry';
import { File, workspaceService } from '../core/filesys';
import { toastError, toastInfo } from '../core/toast';
import { createJsRuntime } from '../core/js-runtime';

export function runJavaScriptCode(code: string): Promise<unknown> {
  const runtime = createJsRuntime();
  return runtime.execute(code).finally(() => runtime.close());
}

async function getCode(params: {
  script?: string;
  code?: string;
}): Promise<string | null> {
  if (params.code?.trim()) return params.code.trim();
  if (!params.script) {
    toastError("Provide 'script' (file path) or 'code'.");
    return null;
  }
  const workspace = await workspaceService.getWorkspace();
  if (!workspace) {
    toastError('No workspace selected.');
    return null;
  }
  try {
    const resource = await workspace.getResource(params.script);
    if (!resource || !(resource instanceof File)) {
      toastError('File not found: ' + params.script);
      return null;
    }
    const contents = await resource.getContents();
    if (typeof contents !== 'string') {
      toastError('File is not a text file');
      return null;
    }
    return contents;
  } catch (err: unknown) {
    toastError(`Failed to access file: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

registerAll({
  command: {
    id: 'js',
    name: 'Run JavaScript file',
    description: 'Runs a script via JsRuntime (inline or file). Return value or self.postMessage(value) is shown.',
    parameters: [
      { name: 'script', description: 'workspace path to a .js file', required: false },
      { name: 'code', description: 'inline JavaScript', required: false },
    ],
  },
  handler: {
    execute: async (context: { params?: { script?: string; code?: string } }) => {
      const code = await getCode(context.params ?? {});
      if (!code) return;
      const runtime = createJsRuntime();
      try {
        const result = await runtime.execute(code);
        if (result !== undefined) toastInfo(String(result));
        return result;
      } catch (err: unknown) {
        toastError(err instanceof Error ? err.message : String(err));
      } finally {
        runtime.close();
      }
    },
  },
});
