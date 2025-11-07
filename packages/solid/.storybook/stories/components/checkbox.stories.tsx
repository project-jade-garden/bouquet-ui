import { type CheckboxStyles, checkboxStyles } from "@bouquet-ui/design";
import { CheckIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { Checkbox } from "../../../src";

const meta = {
  args: {
    color: "surface",
    size: "md"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Checkbox"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: CheckboxStyles.Variants) => {
  const styles = checkboxStyles(props);

  return (
    <Checkbox.Root class={styles.root()}>
      <Checkbox.Label class={styles.label()}>Checkbox</Checkbox.Label>
      <Checkbox.Control class={styles.control()}>
        <Checkbox.Indicator class={styles.indicator()}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
