import { type ProgressStyles, progressStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { Progress } from "../../../src";

const meta = {
  args: {
    color: "primary",
    size: "md"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Progress"
} satisfies Meta<ProgressStyles.Variants>;

export default meta;

export const Circular = (props: ProgressStyles.Variants) => {
  const [value, setValue] = useState(0);
  const styles = progressStyles(props);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return (
    <Progress.Root className={styles.root()} value={value} min={0} max={100}>
      <Progress.Label className={styles.label()}>Label</Progress.Label>
      <Progress.ValueText className={styles.valueText()} />
      <Progress.Circle className={styles.circle()}>
        <Progress.CircleTrack className={styles.circleTrack()} />
        <Progress.CircleRange className={styles.circleRange()} />
      </Progress.Circle>
    </Progress.Root>
  );
};

export const Linear = (props: ProgressStyles.Variants) => {
  const [value, setValue] = useState(0);
  const styles = progressStyles(props);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return (
    <Progress.Root className={styles.root()} value={value} min={0} max={100}>
      <Progress.Label className={styles.label()}>Label</Progress.Label>
      <Progress.ValueText className={styles.valueText()} />
      <Progress.Track className={styles.track()}>
        <Progress.Range className={styles.range()} />
      </Progress.Track>
    </Progress.Root>
  );
};
