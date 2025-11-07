import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";
import IndicatorStory from "./indicator.vue";

const meta = {
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: "boolean"
    }
  },
  title: "Components / Toggle"
} satisfies Meta<typeof BaseStory>;

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

export const Indicator = {
  render: () => ({
    components: { IndicatorStory },
    template: "<indicator-story />"
  })
};
