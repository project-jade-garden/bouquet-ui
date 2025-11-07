import type { CardStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

const meta: Meta = {
  args: {
    variant: "outline"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "soft", "subtle", undefined]
    }
  },
  title: "Components / Card"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<CardStyles.Variants>;
