import { extensionRegistry } from "@eclipse-lyra/core/api";

extensionRegistry.registerExtension({
    id: "@eclipse-lyra/extension-catalog",
    name: "Catalog",
    description: "Browse and checkout resources from a catalog",
    loader: () => import("./loader"),
    icon: "book",
});
