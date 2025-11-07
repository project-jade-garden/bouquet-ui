import type { Meta, StoryObj } from "@storybook/sveltekit";
import type { Field } from "../../../../src/lib";
import InputStory from "./input.svelte";
import TextareaStory from "./textarea.svelte";

const meta = {
  args: {
    disabled: false,
    invalid: false
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    invalid: {
      control: "boolean"
    }
  },
  title: "Components / Field"
} satisfies Meta<Field.RootProps>;

export default meta;

export const Input = {
  render: () => ({
    Component: InputStory
  })
} satisfies StoryObj<Field.RootProps>;

export const Textarea = {
  render: () => ({
    Component: TextareaStory
  })
} satisfies StoryObj<Field.RootProps>;
