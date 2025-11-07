import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";
import MinMaxStory from "./min-max.vue";
import RangeStory from "./range.vue";

const meta = {
  title: "Components / Slider"
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

export const MinMax = {
  render: () => ({
    components: { MinMaxStory },
    template: "<min-max-story />"
  })
};

export const Range = {
  render: () => ({
    components: { RangeStory },
    template: "<range-story />"
  })
};
