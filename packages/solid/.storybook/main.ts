import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  stories: ["./stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: "storybook-solidjs-vite",
  core: {
    disableTelemetry: true
  },
  managerHead: (head) => `
    ${head}
    <style>.sidebar-header img { max-width: 100% !important; max-height: none !important; }</style>
  `,
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: "./" })]
    });
  }
} satisfies StorybookConfig;
