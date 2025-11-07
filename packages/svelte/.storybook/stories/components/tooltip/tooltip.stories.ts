import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

const meta = {
  title: "Components / Tooltip"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj;
