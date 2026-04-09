import { rootContext } from "@eclipse-docks/core";
import { inBrowserMLService } from "./in-browser-ml-service";
import "./media-viewer-toolbar-contribution";
//import "./ml-commands";

export default ({ }: any) => {
    // Register the in-browser ML service in the dependency injection context
    rootContext.put("inBrowserMLService", inBrowserMLService);
    // ML commands are registered via side-effect import of ml-commands.ts
}

