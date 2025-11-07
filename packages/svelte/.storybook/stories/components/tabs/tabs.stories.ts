import type { TabsStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import BaseStory from "./base.svelte";
import DisabledTabStory from "./disabled-tab.svelte";
import ManualStory from "./manual.svelte";
import VerticalStory from "./vertical.svelte";

const meta = {
  args: {
    size: "md",
    variant: "line"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    },
    variant: {
      control: "select",
      options: ["enclosed", "line", "outline", undefined]
    }
  },
  title: "Components / Tabs"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<TabsStyles.Variants>;

export const DisabledTab = {
  render: () => ({
    Component: DisabledTabStory
  })
} satisfies StoryObj<TabsStyles.Variants>;

export const Manual = {
  render: () => ({
    Component: ManualStory
  })
} satisfies StoryObj<TabsStyles.Variants>;

export const Vertical = {
  render: () => ({
    Component: VerticalStory
  })
} satisfies StoryObj<TabsStyles.Variants>;
