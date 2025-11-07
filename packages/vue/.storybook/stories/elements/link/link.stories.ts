import type { LinkStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

const meta = {
  args: {
    color: "primary"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    }
  },
  title: "Elements / Link"
} satisfies Meta<LinkStyles.Variants>;

export default meta;

export const Base = {
  render: (args) => ({
    components: { BaseStory },
    setup() {
      return { args };
    },
    template: '<base-story v-bind="args" />'
  })
} satisfies StoryObj<typeof meta>;
