import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";
import DisabledTabStory from "./disabled-tab.vue";
import ManualStory from "./manual.vue";
import VerticalStory from "./vertical.vue";

const meta = {
  args: {
    size: "md",
    variant: "line"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    },
    variant: {
      control: "select",
      options: ["enclosed", "line", "outline", undefined]
    }
  },
  title: "Components / Tabs"
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

export const DisabledTab = {
  render: () => ({
    components: { DisabledTabStory },
    template: "<disabled-tab-story />"
  })
};

export const Manual = {
  render: () => ({
    components: { ManualStory },
    template: "<manual-story />"
  })
};

export const Vertical = {
  render: () => ({
    components: { VerticalStory },
    template: "<vertical-story />"
  })
};
