import { switchStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
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
    <Switch.Root {...props} class={styles.root()}>
      <Switch.Control class={styles.control()}>
        <Switch.Thumb class={styles.thumb()} />
      </Switch.Control>
      <Switch.Label class={styles.label()}>Label</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  );
};
