import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BaseStory from "./base.vue";
import DisabledEditingStory from "./disabled-editing.vue";
import PasteBehaviorStory from "./paste-behavior.vue";
import ValidatedStory from "./validated.vue";

const meta = {
  title: "Components / TagsInput"
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

export const DisabledEditing = {
  render: () => ({
    components: { DisabledEditingStory },
    template: "<disabled-editing-story />"
  })
};

export const PasteBehavior = {
  render: () => ({
    components: { PasteBehaviorStory },
    template: "<paste-behavior-story />"
  })
};

export const Validated = {
  render: () => ({
    components: { ValidatedStory },
    template: "<validated-story />"
  })
};
