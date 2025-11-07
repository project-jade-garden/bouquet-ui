import { type NumberInputStyles, numberInputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
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
    <NumberInput.Root className={styles.root()}>
      <NumberInput.Label className={styles.label()}>Label</NumberInput.Label>
      <NumberInput.Input className={styles.input()} />
      <NumberInput.Control className={styles.control()}>
        <NumberInput.DecrementTrigger className={styles.decrementTrigger()}>-1</NumberInput.DecrementTrigger>
        <NumberInput.IncrementTrigger className={styles.incrementTrigger()}>+1</NumberInput.IncrementTrigger>
      </NumberInput.Control>
    </NumberInput.Root>
  );
};
