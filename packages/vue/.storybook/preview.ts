import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, VueRenderer } from "@storybook/vue3-vite";
import "./index.css";

export default {
  decorators: [
    withThemeByClassName<VueRenderer>({
      defaultTheme: "light",
      themes: {
        light: "",
        dark: "dark"
      }
    }),
    (Story) => Story()
  ],
  parameters: {
    actions: { disable: true },
    backgrounds: { disable: true },
    layout: "padded",
    options: {
      storySort: {
        order: ["Elements", "Components", "Animations"],
        method: "alphabetical"
      }
    },
    viewport: { disable: true }
  }
} satisfies Preview;
