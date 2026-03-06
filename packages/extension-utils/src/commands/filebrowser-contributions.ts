import {
  contributionRegistry,
  activeSelectionSignal,
  File,
  Directory,
  i18nLazy,
} from "@eclipse-lyra/core";

const t = i18nLazy("extensions");

function isResource(obj: unknown): obj is File | Directory {
  return obj instanceof File || obj instanceof Directory;
}

const disabled = () => !isResource(activeSelectionSignal.get());

contributionRegistry.registerContribution("toolbar:filebrowser", {
  command: "mv",
  icon: "pen",
  label: t("RENAME") as unknown as string,
  disabled,
});
contributionRegistry.registerContribution("toolbar:filebrowser", {
  command: "rm",
  icon: "trash",
  label: t("DELETE") as unknown as string,
  disabled,
});
contributionRegistry.registerContribution("contextmenu:filebrowser", {
  command: "mv",
  icon: "pen",
  label: t("RENAME") as unknown as string,
  disabled,
});
contributionRegistry.registerContribution("contextmenu:filebrowser", {
  command: "rm",
  icon: "trash",
  label: t("DELETE") as unknown as string,
  disabled,
});
