const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const PACKAGES_DIR = path.join(ROOT, "packages");
const EXTENSION_SCOPE = "@eclipse-docks/extension-";

function getExtensionPackages() {
  const dirs = fs.readdirSync(PACKAGES_DIR, { withFileTypes: true });
  const packages = [];
  for (const d of dirs) {
    if (!d.isDirectory() || !d.name.startsWith("extension-")) continue;
    const pkgPath = path.join(PACKAGES_DIR, d.name, "package.json");
    if (!fs.existsSync(pkgPath)) continue;
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    if (!pkg.name?.startsWith(EXTENSION_SCOPE) || !pkg.scripts?.build) continue;
    packages.push({ name: pkg.name, dir: d.name, deps: pkg.dependencies || {} });
  }
  return packages;
}

function extensionDeps(deps) {
  return Object.keys(deps).filter((k) => k.startsWith(EXTENSION_SCOPE));
}

function buildOrder(packages) {
  const byName = new Map(packages.map((p) => [p.name, p]));
  const levels = [];
  const done = new Set();

  while (done.size < packages.length) {
    const level = packages.filter(
      (p) =>
        !done.has(p.name) &&
        extensionDeps(p.deps).every((d) => byName.has(d) && done.has(d))
    );
    if (level.length === 0) {
      const remaining = packages.filter((p) => !done.has(p.name));
      throw new Error(
        "Circular extension dependencies: " + remaining.map((p) => p.name).join(", ")
      );
    }
    level.forEach((p) => done.add(p.name));
    levels.push(level.map((p) => p.name));
  }
  return levels;
}

function main() {
  const packages = getExtensionPackages();
  if (packages.length === 0) return;
  const levels = buildOrder(packages);
  for (const names of levels) {
    execSync(`npm run build ${names.map((n) => `-w ${n}`).join(" ")}`, {
      cwd: ROOT,
      stdio: "inherit",
    });
  }
}

main();
