import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { type DataAttrDocKey, getDataAttrDoc } from "@zag-js/docs";
import { camelCase, pascalCase } from "es-toolkit/string";

const SKIP_FILES = ["index.ts", "button", "input", "utils.ts"];

const getDir = (dir: string): string => join(process.cwd(), `../packages/${dir}/src`);

/**
 * Generates the `design` package files.
 */
const main = async () => {
  const reactDir = getDir("react");
  const components = readdirSync(reactDir).filter((component) => !SKIP_FILES.includes(component));

  const designDir = `${getDir("design")}/classes/components`;

  for (const component of components) {
    const module = await import(`@ark-ui/react/${component}`);
    const anatomy: string[] = module[camelCase(`${component}Anatomy`)].keys();

    const traits: Record<string, Record<string, string>> = {};
    for (const slot of anatomy) {
      try {
        const dataAttrs = getDataAttrDoc(component as DataAttrDocKey)?.[pascalCase(slot)];

        if (dataAttrs) {
          // Remove 'data-' for Traits
          for (const key of Object.keys(dataAttrs)) {
            dataAttrs[key.replace("data-", "")] = dataAttrs[key];
            delete dataAttrs[key];
          }

          traits[slot] = dataAttrs;
        }
      } catch {
        console.log(`${component} does not exist in Zag`);
      }
    }

    const componentHasTraits = Object.keys(traits).length > 0;

    // * Write "index" file
    writeFileSync(
      `${designDir}/${component}/index.ts`,
      `import { sva } from "jade-garden/sva";

export const ${camelCase(`${component}Styles`)} = sva({
  name: "${component}",
  slots: ${JSON.stringify(anatomy, null, 2)},
  base: {}
});
${componentHasTraits ? `\nexport type * as ${pascalCase(`${component}Styles`)} from "./types";` : ""}
`
    );

    // * Write "types" file
    if (componentHasTraits) {
      const traitTypes = Object.keys(traits)
        .map(
          (component) => `export type ${pascalCase(`${component}Traits`)} = Traits<{
      data: ${JSON.stringify(traits[component], null, 2)}
    }>;`
        )
        .join("\n\n");

      writeFileSync(
        `${designDir}/${component}/types.ts`,
        `// * https://ark-ui.com/docs/components/${component}#api-reference
import type { Traits, VariantProps } from "jade-garden";

${traitTypes}
`
      );
    }
  }
};

// await main();
