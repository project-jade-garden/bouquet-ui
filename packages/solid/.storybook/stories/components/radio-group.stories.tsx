import { type RadioGroupStyles, radioGroupStyles } from "@bouquet-ui/design";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { RadioGroup } from "../../../src";

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
  title: "Components / Radio Group"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: RadioGroup.RootProps & RadioGroupStyles.Variants) => {
  const frameworks = ["React", "Solid", "Vue", "Svelte"];
  const styles = radioGroupStyles(props);

  return (
    <RadioGroup.Root class={styles.root()}>
      <RadioGroup.Label class={styles.label()}>Framework</RadioGroup.Label>
      <RadioGroup.Indicator class={styles.indicator()} />
      <Index each={frameworks}>
        {(framework) => (
          <RadioGroup.Item class={styles.item()} value={framework()}>
            <RadioGroup.ItemText class={styles.itemText()}>{framework()}</RadioGroup.ItemText>
            <RadioGroup.ItemControl class={styles.itemControl()} />
            <RadioGroup.ItemHiddenInput />
          </RadioGroup.Item>
        )}
      </Index>
    </RadioGroup.Root>
  );
};
