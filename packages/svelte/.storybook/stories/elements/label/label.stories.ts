import type { LabelStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

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
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<LabelStyles.Variants>;
