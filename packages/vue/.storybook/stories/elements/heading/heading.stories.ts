import type { HeadingStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

const meta = {
  args: {
    variant: "h1"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", undefined]
    }
  },
  title: "Elements / Heading"
} satisfies Meta<HeadingStyles.Variants>;

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
