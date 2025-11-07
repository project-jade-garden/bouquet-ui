import { switchStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Switch } from "../../../src";

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
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: Switch.RootProps) => {
  const styles = switchStyles();

  return (
    <Switch.Root {...props} className={styles.root()}>
      <Switch.Control className={styles.control()}>
        <Switch.Thumb className={styles.thumb()} />
      </Switch.Control>
      <Switch.Label className={styles.label()}>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  );
};
