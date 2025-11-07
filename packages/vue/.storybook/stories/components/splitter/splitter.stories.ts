import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";
import CollapsibleStory from "./collapsible.vue";
import VerticalStory from "./vertical.vue";

const meta = {
  title: "Components / Splitter"
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

export const Collapsible = {
  render: () => ({
    components: { CollapsibleStory },
    template: "<collapsible-story />"
  })
};

export const Vertical = {
  render: () => ({
    components: { VerticalStory },
    template: "<vertical-story />"
  })
};
