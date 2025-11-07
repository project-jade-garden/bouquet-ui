import { copyFileSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { globbySync } from "globby";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: globbySync(["src/**/index.ts", "src/utils.ts"]),
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    minify: false,
    rollupOptions: {
      external: [/^@ark-ui\/vue.*/, /^@bouquet-ui\/design.*/, ...Object.keys(pkg.peerDependencies ?? {})],
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
        const files = globbySync(["dist/**.d.ts", "dist/**/*.d.ts"]);
        for (const file of files) {
          copyFileSync(file, file.replace(/\.d\.ts$/, ".d.cts"));
        }
      },
      entryRoot: "src",
      staticImport: true
    }),
    vue(),
    tailwindcss()
  ],
  resolve: {
    conditions: ["source"]
  }
});
