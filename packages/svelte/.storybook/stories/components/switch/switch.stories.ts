import type { Meta, StoryObj } from "@storybook/sveltekit";
import type { Switch } from "../../../../src/lib";
import BaseStory from "./base.svelte";

const meta = {
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: "boolean"
    }
  },
  title: "Components / Switch"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<Switch.RootProps>;
