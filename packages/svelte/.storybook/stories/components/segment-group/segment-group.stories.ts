import type { SegmentGroupStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";
import DisabledStory from "./disabled.svelte";

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
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<SegmentGroupStyles.Variants>;

export const Disabled = {
  render: () => ({
    Component: DisabledStory
  })
} satisfies StoryObj<SegmentGroupStyles.Variants>;
