import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default {
  stories: ["./stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  framework: "@storybook/react-vite",
  core: {
    disableTelemetry: true
  },
  managerHead: (head) => `
    ${head}
    <style>.sidebar-header img { max-width: 100% !important; max-height: none !important; }</style>
  `,
  typescript: {
    reactDocgen: false
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: "./" })]
    });
  }
} satisfies StorybookConfig;
