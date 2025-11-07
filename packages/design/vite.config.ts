import { copyFileSync } from "node:fs";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: globbySync("src/**/index.ts"),
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    minify: false,
    rollupOptions: {
      external: [/^jade-garden.*/],
      output: [
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          entryFileNames: "[name].cjs"
        },
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          entryFileNames: "[name].js"
        }
      ]
    },
    target: "esnext"
  },
  logLevel: "warn",
  plugins: [
    dts({
      afterBuild: () => {
        const files = globbySync(["dist/**/*.d.ts", "dist/**.d.ts"]);
        for (const file of files) {
          copyFileSync(file, file.replace(/\.d\.ts$/, ".d.cts"));
        }
      },
      entryRoot: "src",
      staticImport: true
    })
  ]
});
