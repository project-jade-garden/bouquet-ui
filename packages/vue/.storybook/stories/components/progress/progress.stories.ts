import type { ProgressStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import CircularStory from "./circular.vue";
import LinearStory from "./linear.vue";

const meta = {
  args: {
    color: "primary",
    size: "md"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Progress"
} satisfies Meta<ProgressStyles.Variants>;

export default meta;

export const Circular = {
  render: () => ({
    components: { CircularStory },
    template: "<circular-story />"
  })
} satisfies StoryObj<typeof meta>;

export const Linear = {
  render: () => ({
    components: { LinearStory },
    template: "<linear-story />"
  })
} satisfies StoryObj<typeof meta>;
