/// <reference types="vite/client" />

declare const __RESOLVED_PACKAGE_INFO__: { name: string; version: string; dependencies: Record<string, string> } | undefined;

declare module "pace-js" {
  const Pace: { start: (options?: unknown) => void };
  export default Pace;
}
