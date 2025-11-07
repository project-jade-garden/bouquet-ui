import type { SpinnerStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

const meta = {
  args: {
    size: "md",
    speed: "slowest"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", undefined]
    },
    speed: {
      control: "select",
      options: ["fastest", "faster", "fast", "normal", "slow", "slower", "slowest", undefined]
    }
  },
  title: "Animations / Spinner"
} satisfies Meta<SpinnerStyles.Variants>;

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
