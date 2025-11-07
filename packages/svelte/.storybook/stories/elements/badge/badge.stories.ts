import type { BadgeStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

const meta = {
  args: {
    color: "primary",
    pill: false,
    size: "md",
    variant: "solid"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    pill: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", undefined]
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "soft", "subtle", undefined]
    }
  },
  title: "Elements / Badge"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<BadgeStyles.Variants>;
