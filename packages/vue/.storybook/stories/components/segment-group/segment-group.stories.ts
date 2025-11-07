import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";
import DisabledStory from "./disabled.vue";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", undefined]
    }
  },
  title: "Components / Segment Group"
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

export const Disabled = {
  render: () => ({
    components: { DisabledStory },
    template: "<disabled-story />"
  })
} satisfies StoryObj<typeof meta>;
