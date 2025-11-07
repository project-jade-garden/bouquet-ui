import { type PinInputStyles, pinInputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { PinInput } from "../../../src";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", undefined]
    }
  },
  title: "Components / Pin Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: PinInputStyles.Variants) => {
  const styles = pinInputStyles(props);

  return (
    <PinInput.Root className={styles.root()} onValueComplete={(e) => alert(e.valueAsString)}>
      <PinInput.Label className={styles.label()}>Label</PinInput.Label>
      <PinInput.Control className={styles.control()}>
        {[0, 1, 2].map((id, index) => (
          <PinInput.Input className={styles.input()} key={id} index={index} />
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
};
