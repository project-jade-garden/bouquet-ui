import type { BadgeStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

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
} satisfies Meta<BadgeStyles.Variants>;

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
