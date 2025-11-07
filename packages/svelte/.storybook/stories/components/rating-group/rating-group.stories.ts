import type { RatingGroupStyles } from "@bouquet-ui/design";
import type { Meta, StoryObj } from "@storybook/sveltekit";
import type { RatingGroup } from "../../../../src/lib";
import BaseStory from "./base.svelte";

const meta = {
  args: {
    disabled: false,
    size: "md"
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Rating Group"
} satisfies Meta<typeof BaseStory>;

export default meta;

export const Base = {
  render: (args) => ({
    Component: BaseStory,
    props: args
  })
} satisfies StoryObj<RatingGroup.RootProps & RatingGroupStyles.Variants>;
