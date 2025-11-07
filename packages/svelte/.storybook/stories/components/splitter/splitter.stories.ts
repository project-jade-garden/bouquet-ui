import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";
import CollapsibleStory from "./collapsible.svelte";
import VerticalStory from "./vertical.svelte";

const meta = {
  title: "Components / Splitter"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj;

export const Collapsible = {
  render: () => ({
    Component: CollapsibleStory
  })
} satisfies StoryObj;

export const Vertical = {
  render: () => ({
    Component: VerticalStory
  })
} satisfies StoryObj;
