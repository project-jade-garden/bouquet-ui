import { type CheckboxStyles, checkboxStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { CheckIcon } from "lucide-react";
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
    <Checkbox.Root className={styles.root()}>
      <Checkbox.Label className={styles.label()}>Checkbox</Checkbox.Label>
      <Checkbox.Control className={styles.control()}>
        <Checkbox.Indicator className={styles.indicator()}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
