import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";

const meta = {
  title: "Components / PasswordInput"
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
