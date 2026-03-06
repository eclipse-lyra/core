import { registerAll, workspaceService, toastError, Directory } from "@eclipse-lyra/core";
import { PyEnv } from "./pyservice";

registerAll({
  command: {
    id: "python",
    name: "Run Python Cell",
    description:
      "Runs Python code. Optionally mounts the current workspace when requested.",
    keyBinding: "CTRL+R",
    parameters: [
      {
        name: "code",
        description: "Python code to execute",
        required: true
      },
      {
        name: "workspace",
        description:
          "Whether to mount and use the current workspace (default: false)",
        type: "boolean",
        required: false
      }
    ]
  },
  handler: {
    execute: async (context: any) => {
      const code: string | undefined = context.params?.code;
      if (!code) {
        toastError("No Python code provided.");
        return;
      }

      const useWorkspaceParam = context.params?.workspace;
      const useWorkspace =
        useWorkspaceParam === true || useWorkspaceParam === "true";

      const pyenv = new PyEnv();

      let workspace: Directory | undefined;

      if (useWorkspace) {
        workspace = await workspaceService.getWorkspace();
        if (!workspace) {
          toastError("No workspace selected.");
          return;
        }
      }

      // Only pass structured-cloneable data to the worker
      await pyenv.init(workspace, { params: context.params });
      const result = await pyenv.execCode(code);
      return result;
    }
  }
});

