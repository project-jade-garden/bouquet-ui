import { type ProgressStyles, progressStyles } from "@bouquet-ui/design";
import { createEffect, createSignal } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
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
  const [value, setValue] = createSignal(0);
  const styles = progressStyles(props);

  createEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return (
    <Progress.Root class={styles.root()} value={value()} min={0} max={100}>
      <Progress.Label class={styles.label()}>Label</Progress.Label>
      <Progress.ValueText class={styles.valueText()} />
      <Progress.Circle class={styles.circle()}>
        <Progress.CircleTrack class={styles.circleTrack()} />
        <Progress.CircleRange class={styles.circleRange()} />
      </Progress.Circle>
    </Progress.Root>
  );
};

export const Linear = (props: ProgressStyles.Variants) => {
  const [value, setValue] = createSignal(0);
  const styles = progressStyles(props);

  createEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return (
    <Progress.Root class={styles.root()} value={value()} min={0} max={100}>
      <Progress.Label class={styles.label()}>Label</Progress.Label>
      <Progress.ValueText class={styles.valueText()} />
      <Progress.Track class={styles.track()}>
        <Progress.Range class={styles.range()} />
      </Progress.Track>
    </Progress.Root>
  );
};
