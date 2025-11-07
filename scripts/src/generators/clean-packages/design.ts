import { readdirSync } from "node:fs";
import { join } from "node:path";
import { cloneDeep } from "es-toolkit/object";

// * BASE PATH ONLY FOR CLASSES, NOT THEMES
const BASE_EXPORT_PATH = "./dist/classes";

const DESIGN_ROOT_EXPORT = {
  main: "./dist/index.cjs",
  module: "./dist/index.js",
  types: "./dist/index.d.ts",
  exports: {
    ".": {
      import: {
        types: "./dist/index.d.ts",
        default: "./dist/index.js"
      },
      require: {
        types: "./dist/index.d.cts",
        default: "./dist/index.cjs"
      }
    }
  } as Record<string, string | Record<string, Record<string, string>>>
};

const SKIP_FILES = [".DS_Store", "index.ts"];

const getDir = (dir: string): string[] => readdirSync(join(process.cwd(), `../${dir}`));

export const designCleanPkg = async (): Promise<string> => {
  const cleanPkg = cloneDeep(DESIGN_ROOT_EXPORT);

  const subdirs = ["animations", "components", "elements"] as const;

  for (const subdir of subdirs) {
    cleanPkg.exports[`./${subdir}`] = {
      import: {
        types: `${BASE_EXPORT_PATH}/${subdir}/index.d.ts`,
        default: `${BASE_EXPORT_PATH}/${subdir}/index.js`
      },
      require: {
        types: `${BASE_EXPORT_PATH}/${subdir}/index.d.cts`,
        default: `${BASE_EXPORT_PATH}/${subdir}/index.cjs`
      }
    };
    const dirs = getDir(`packages/design/src/classes/${subdir}`)
      .filter((dir) => !SKIP_FILES.includes(dir))
      .sort();
    for (const dir of dirs) {
      const file = dir.replace(".ts", "");

      cleanPkg.exports[`./${subdir}/${file}`] = {
        import: {
          types: `${BASE_EXPORT_PATH}/${subdir}/${dir}/index.d.ts`,
          default: `${BASE_EXPORT_PATH}/${subdir}/${dir}/index.js`
        },
        require: {
          types: `${BASE_EXPORT_PATH}/${subdir}/${dir}/index.d.cts`,
          default: `${BASE_EXPORT_PATH}/${subdir}/${dir}/index.cjs`
        }
      };
    }
  }

  cleanPkg.exports["./styles"] = "./dist/styles/index.css";
  const themes = getDir("packages/design/src/styles/themes");
  for (const theme of themes) {
    const file = theme.replace(".css", "");
    cleanPkg.exports[`./themes/${file}`] = `./dist/styles/themes/${theme}`;
  }

  return JSON.stringify({ replace: cleanPkg }, null, 2);
};
