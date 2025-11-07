import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { designCleanPkg, frameworkCleanPkg } from "./generators";

const getDir = (dir: string): string[] => readdirSync(join(process.cwd(), `../${dir}`));

/**
 * Generates the exports for clean-package.config.json in `packages`.
 */
const main = async () => {
  const packageDirs = getDir("packages");

  for (const packageDir of packageDirs) {
    if (packageDir === "design") {
      const cleanPkg = await designCleanPkg();
      writeFileSync(join(process.cwd(), `../packages/${packageDir}/clean-package.config.json`), cleanPkg);
    } else {
      const cleanPkg = await frameworkCleanPkg(packageDir);
      writeFileSync(join(process.cwd(), `../packages/${packageDir}/clean-package.config.json`), cleanPkg);
    }
  }
};

// await main();
