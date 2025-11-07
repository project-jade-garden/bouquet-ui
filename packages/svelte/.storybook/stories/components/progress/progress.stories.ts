import type { ProgressStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import CircularStory from "./circular.svelte";
import LinearStory from "./linear.svelte";

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
  render: (args) => ({
    Component: CircularStory,
    props: args
  })
} satisfies StoryObj<ProgressStyles.Variants>;

export const Linear = {
  render: (args) => ({
    Component: LinearStory,
    props: args
  })
} satisfies StoryObj<ProgressStyles.Variants>;
