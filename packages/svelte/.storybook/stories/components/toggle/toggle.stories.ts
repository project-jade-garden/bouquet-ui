import type { Meta, StoryObj } from "@storybook/sveltekit";
import type { Toggle } from "../../../../src/lib";
import BaseStory from "./base.svelte";
import IndicatorStory from "./indicator.svelte";

const meta = {
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: "boolean"
    }
  },
  title: "Components / Toggle"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<Toggle.RootProps>;

export const Indicator = {
  render: () => ({
    Component: IndicatorStory
  })
} satisfies StoryObj<Toggle.RootProps>;
