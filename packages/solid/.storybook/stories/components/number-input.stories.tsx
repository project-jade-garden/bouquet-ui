import { type NumberInputStyles, numberInputStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { NumberInput } from "../../../src";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["md", "lg", "xl", undefined]
    }
  },
  title: "Components / Number Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: NumberInputStyles.Variants) => {
  const styles = numberInputStyles(props);

  return (
    <NumberInput.Root class={styles.root()}>
      <NumberInput.Label class={styles.label()}>Label</NumberInput.Label>
      <NumberInput.Input class={styles.input()} />
      <NumberInput.Control class={styles.control()}>
        <NumberInput.DecrementTrigger class={styles.decrementTrigger()}>-1</NumberInput.DecrementTrigger>
        <NumberInput.IncrementTrigger class={styles.incrementTrigger()}>+1</NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  );
};
