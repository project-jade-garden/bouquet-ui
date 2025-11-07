import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, SvelteRenderer } from "@storybook/sveltekit";
import "./index.css";

export default {
  decorators: [
    withThemeByClassName<SvelteRenderer>({
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
