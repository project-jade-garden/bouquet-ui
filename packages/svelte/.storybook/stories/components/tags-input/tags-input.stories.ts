import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";
import DisabledEditingStory from "./disabled-editing.svelte";
import PasteBehaviorStory from "./paste-behavior.svelte";
import ValidatedStory from "./validated.svelte";

const meta = {
  title: "Components / TagsInput"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj;

export const DisabledEditing = {
  render: () => ({
    Component: DisabledEditingStory
  })
} satisfies StoryObj;

export const PasteBehavior = {
  render: () => ({
    Component: PasteBehaviorStory
  })
} satisfies StoryObj;

export const Validated = {
  render: () => ({
    Component: ValidatedStory
  })
} satisfies StoryObj;
