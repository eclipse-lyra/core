import { File, FileContentType, workspaceService, taskService, toastError, toastInfo, registerAll } from "@eclipse-lyra/core";

registerAll({
  command: {
    id: "wget",
    name: "wget",
    description: "Download a file from a URL to the workspace",
    parameters: [
      {
        name: "url",
        description: "the URL of the file to download",
        required: true
      },
      {
        name: "filename",
        description: "optional filename to save as (will be auto-detected if not provided)",
        required: false
      }
    ]
  },
  handler: {
    canExecute: (context: any) => {
      const url = context.params && context.params["url"];
      if (!url) {
        return false;
      }
      return url.startsWith("http://") || url.startsWith("https://");
    },
    execute: async (context: any) => {
      const url = context.params && context.params["url"];

      if (!url) {
        toastError("No URL provided.");
        return;
      }

      const workspaceDir = await workspaceService.getWorkspace();
      if (!workspaceDir) {
        toastError("No workspace selected.");
        return;
      }

      const folders = await workspaceService.getFolders();
      const targetFolderName = folders.length > 0 ? folders[0].name : null;

      await taskService.runAsync("Downloading file", async (progress: any) => {
        progress.message = "Starting download...";
        progress.progress = 0;

        try {
          const response = await fetch(url, {
            mode: "cors",
            credentials: "omit"
          });

          if (!response.ok) {
            toastError("Failed to download file: " + response.statusText);
            return;
          }

          let fileName = context.params && context.params["filename"];

          if (!fileName) {
            const contentDisposition = response.headers.get("content-disposition");
            if (contentDisposition) {
              let filenameMatch = contentDisposition.match(/filename="([^"]+)"/);
              if (filenameMatch && filenameMatch[1]) {
                fileName = filenameMatch[1];
              } else {
                filenameMatch = contentDisposition.match(/filename=([^;]+)/);
                if (filenameMatch && filenameMatch[1]) {
                  fileName = filenameMatch[1].trim();
                }
              }
            }

            if (!fileName) {
              const urlSegments = new URL(url).pathname.split("/").filter(s => s.length > 0);
              const lastSegment = urlSegments[urlSegments.length - 1];
              if (lastSegment && lastSegment.includes(".")) {
                fileName = lastSegment;
              } else {
                const now = new Date().toISOString().replace(/[:.]/g, "-").replace("T", "_").slice(0, -5);
                fileName = `downloaded-file-${now}`;
              }
            }
          }

          const targetPath = targetFolderName ? `${targetFolderName}/${fileName}` : fileName;
          const downloadedFile = await workspaceDir.getResource(targetPath, { create: true }) as File;

          progress.message = `Downloading ${fileName}...`;
          progress.progress = 50;

          await downloadedFile.saveContents(response.body, {
            contentType: FileContentType.BINARY
          });

          progress.progress = 100;
          toastInfo(`File downloaded: ${fileName}`);
        } catch (err) {
          toastError("Failed to download file: " + err);
          throw err;
        }
      });
    }
  }
});

