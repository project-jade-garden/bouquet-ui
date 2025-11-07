import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cloneDeep } from "es-toolkit/object";

const BASE_EXPORT_PATH = "./dist";

const ROOT_EXPORT = {
  main: `${BASE_EXPORT_PATH}/index.cjs`,
  module: `${BASE_EXPORT_PATH}/index.js`,
  types: `${BASE_EXPORT_PATH}/index.d.ts`,
  exports: {
    ".": {
      import: {
        types: `${BASE_EXPORT_PATH}/index.d.ts`,
        default: `${BASE_EXPORT_PATH}/index.js`
      },
      require: {
        types: `${BASE_EXPORT_PATH}/index.d.cts`,
        default: `${BASE_EXPORT_PATH}/index.cjs`
      }
    }
  } as Record<string, string | Record<string, Record<string, string>>>
};

const SVELTE_ROOT_EXPORT = {
  svelte: `${BASE_EXPORT_PATH}/index.js`,
  types: `${BASE_EXPORT_PATH}/index.d.ts`,
  exports: {
    ".": {
      types: `${BASE_EXPORT_PATH}/index.d.ts`,
      svelte: `${BASE_EXPORT_PATH}/index.js`,
      default: `${BASE_EXPORT_PATH}/index.js`
    }
  } as Record<string, Record<string, string>>
};

const SKIP_FILES = [".DS_Store", "index.ts", "utils.ts"];

const getDir = (dir: string): string[] => readdirSync(join(process.cwd(), `../${dir}`));

/**
 * Generates the exports for clean-package.config.json in `packages`.
 */
export const frameworkCleanPkg = async (packageDir: string): Promise<string> => {
  const isSvelteDir = packageDir === "svelte";

  const components = getDir(`packages/${packageDir}/src${isSvelteDir ? "/lib" : ""}`)
    .filter((component) => !SKIP_FILES.includes(component))
    .sort();

  const cleanPkg = cloneDeep(isSvelteDir ? SVELTE_ROOT_EXPORT : ROOT_EXPORT);

  for (const component of components) {
    const file = component.replace(".ts", "");

    if (isSvelteDir) {
      cleanPkg.exports[`./${file}`] = {
        types: `${BASE_EXPORT_PATH}/${component}/index.d.ts`,
        svelte: `${BASE_EXPORT_PATH}/${component}/index.js`,
        default: `${BASE_EXPORT_PATH}/${component}/index.js`
      };
    } else {
      cleanPkg.exports[`./${file}`] = {
        import: {
          types: `${BASE_EXPORT_PATH}/${component}/index.d.ts`,
          default: `${BASE_EXPORT_PATH}/${component}/index.js`
        },
        require: {
          types: `${BASE_EXPORT_PATH}/${component}/index.d.cts`,
          default: `${BASE_EXPORT_PATH}/${component}/index.cjs`
        }
      };
    }
  }

  // * Add utils.ts
  if (isSvelteDir) {
    cleanPkg.exports["./utils"] = {
      types: `${BASE_EXPORT_PATH}/utils.d.ts`,
      svelte: `${BASE_EXPORT_PATH}/utils.js`,
      default: `${BASE_EXPORT_PATH}/utils.js`
    };
  } else {
    cleanPkg.exports["./utils"] = {
      import: {
        types: `${BASE_EXPORT_PATH}/utils.d.ts`,
        default: `${BASE_EXPORT_PATH}/utils.js`
      },
      require: {
        types: `${BASE_EXPORT_PATH}/utils.d.cts`,
        default: `${BASE_EXPORT_PATH}/utils.cjs`
      }
    };
  }

  return JSON.stringify({ replace: cleanPkg }, null, 2);
};
