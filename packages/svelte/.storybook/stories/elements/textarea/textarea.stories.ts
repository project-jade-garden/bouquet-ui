import type { TextareaStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

const meta = {
  args: {
    color: "primary",
    size: "md",
    variant: "outline"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    },
    variant: {
      control: "select",
      options: ["outline", "ghost", undefined]
    }
  },
  title: "Elements / Textarea"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<TextareaStyles.Variants>;
