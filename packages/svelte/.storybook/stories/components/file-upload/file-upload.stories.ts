import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

const meta = {
  title: "Components / FileUpload"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj;
