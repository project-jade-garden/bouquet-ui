import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";
import MinMaxStory from "./min-max.svelte";
import RangeStory from "./range.svelte";

const meta = {
  title: "Components / Slider"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj;

export const MinMax = {
  render: () => ({
    Component: MinMaxStory
  })
} satisfies StoryObj;

export const Range = {
  render: () => ({
    Component: RangeStory
  })
} satisfies StoryObj;
