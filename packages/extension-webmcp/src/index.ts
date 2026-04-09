import { extensionRegistry } from "@eclipse-docks/core";
import pkg from "../package.json";

function isModelContextAvailable(): boolean {
  return typeof navigator !== "undefined" && "modelContext" in navigator && navigator.modelContext != null;
}

extensionRegistry.registerExtension({
  id: pkg.name,
  name: "WebMCP",
  description: "Exposes app commands as WebMCP tools for browser agents and MCP clients",
  loader: async () => {
    if (!isModelContextAvailable()) {
      throw new Error("WebMCP extension requires navigator.modelContext (Web Model Context API).");
    }
    return import("./webmcp-extension");
  },
  icon: "plug",
  dependencies: ["@eclipse-docks/extension-ai-system"],
  experimental: true,
});
