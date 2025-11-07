import type { LabelStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", undefined]
    }
  },
  title: "Elements / Label"
} satisfies Meta<LabelStyles.Variants>;

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
