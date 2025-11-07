import type { TableStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

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
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<TableStyles.Variants>;
