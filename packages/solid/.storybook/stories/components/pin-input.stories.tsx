import { type PinInputStyles, pinInputStyles } from "@bouquet-ui/design";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
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
    <PinInput.Root class={styles.root()} onValueComplete={(e) => alert(e.valueAsString)}>
      <PinInput.Label class={styles.label()}>Label</PinInput.Label>
      <PinInput.Control class={styles.control()}>
        <Index each={[0, 1, 2]}>{(id) => <PinInput.Input class={styles.input()} index={id()} />}</Index>
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
};
