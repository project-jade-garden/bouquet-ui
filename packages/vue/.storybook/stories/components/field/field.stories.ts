import type { Meta, StoryObj } from "@storybook/vue3-vite";
import type { Field } from "../../../../src";
import InputStory from "./input.vue";
import TextareaStory from "./textarea.vue";

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
    components: { InputStory },
    template: "<input-story />"
  })
} satisfies StoryObj<typeof meta>;

export const Textarea = {
  render: () => ({
    components: { TextareaStory },
    template: "<textarea-story />"
  })
} satisfies StoryObj<typeof meta>;
