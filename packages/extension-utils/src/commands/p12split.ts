import { workspaceService, taskService, toastError, toastInfo, registerAll } from "@eclipse-docks/core";
import { PyEnv } from "@eclipse-docks/extension-python-runtime/api";

registerAll({
  command: {
    id: "p12split",
    name: ".p12 file splitter",
    description: "Splits a .p12 file into private/public and additional .pem files",
    parameters: [
      {
        name: "p12_path",
        description: "Path of the .p12 file to split",
        required: true
      },
      {
        name: "password",
        description:
          "The password of the .p12 file, will prompt for input if not specified, use empty string for no password",
        required: false
      },
      {
        name: "output_path",
        description:
          "Directory path of the files to write to, if not provided, will be parent directory of p12_path",
        required: false
      }
    ]
  },
  handler: {
    execute: async ({ params: { p12_path, password, output_path } }: any) => {
      const workspace = await workspaceService.getWorkspace();
      if (!workspace) {
        toastError("No Workspace selected!");
        return;
      }

      await taskService.runAsync("Splitting .p12 certificate file", async () => {
        const pyEnv = new PyEnv();
        await pyEnv.init(workspace);
        await pyEnv.loadPackages(["cryptography"]);
        const pyModule = await import("../p12splitter.py?raw");
        const pyScript = (pyModule as any).default ?? pyModule;
        await pyEnv.execCode(pyScript as string);
        await pyEnv.runFunction("p12splitter", {
          p12_path,
          password: password === '""' ? undefined : password,
          output_path: output_path === '""' ? "" : output_path
        });
        toastInfo(".p12 file successfully splitted");
      });
    }
  }
});

