import { extensionRegistry } from "@eclipse-docks/core";

extensionRegistry.registerExtension({
    id: "@eclipse-docks/extension-catalog",
    name: "Catalog",
    description: "Browse and checkout resources from a catalog",
    loader: () => import("./loader"),
    icon: "book",
});
