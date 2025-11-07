import type { SkeletonStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";

const meta = {
  args: {
    speed: "slowest"
  },
  argTypes: {
    speed: {
      control: "select",
      options: ["fastest", "faster", "fast", "normal", "slow", "slower", "slowest", undefined]
    }
  },
  title: "Animations / Skeleton"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<SkeletonStyles.Variants>;
