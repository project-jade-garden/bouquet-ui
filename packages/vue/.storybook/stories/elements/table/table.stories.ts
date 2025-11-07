import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

const meta: Meta = {
  args: {
    size: "md",
    variant: "plain"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "plain", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", undefined]
    }
  },
  title: "Elements / Table"
} satisfies Meta<typeof BaseStory>;

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
