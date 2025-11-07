import { toggleStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { BoldIcon, Volume, VolumeOff } from "lucide-react";
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
    <Toggle.Root {...props} className={styles.root()}>
      <BoldIcon />
    </Toggle.Root>
  );
};

export const Indicator = (props: Toggle.RootProps) => {
  const styles = toggleStyles();

  return (
    <Toggle.Root {...props} className={styles.root()}>
      <Toggle.Indicator className={styles.indicator()} fallback={<Volume />}>
        <VolumeOff />
      </Toggle.Indicator>
    </Toggle.Root>
  );
};
