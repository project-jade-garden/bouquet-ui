import { toggleStyles } from "@bouquet-ui/design";
import { BoldIcon, Volume, VolumeOff } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { Toggle } from "../../../src";

const meta = {
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: "boolean"
    }
  },
  title: "Components / Toggle"
} satisfies Meta<Toggle.RootProps>;

export default meta;

export const Base = (props: Toggle.RootProps) => {
  const styles = toggleStyles();

  return (
    <Toggle.Root {...props} class={styles.root()}>
      <BoldIcon />
    </Toggle.Root>
  );
};

export const Indicator = (props: Toggle.RootProps) => {
  const styles = toggleStyles();

  return (
    <Toggle.Root {...props} class={styles.root()}>
      <Toggle.Indicator class={styles.indicator()} fallback={<Volume />}>
        <VolumeOff />
      </Toggle.Indicator>
    </Toggle.Root>
  );
};
