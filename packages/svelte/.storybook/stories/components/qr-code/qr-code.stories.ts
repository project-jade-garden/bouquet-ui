import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";
import WithOverlayStory from "./with-overlay.svelte";

const meta = {
  title: "Components / QR Code"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj;

export const WithOverlay = {
  render: () => ({
    Component: WithOverlayStory
  })
};
