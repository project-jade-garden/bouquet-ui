import { sliderStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Slider } from "../../../src";

const meta = {
  title: "Components / Slider"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = sliderStyles();

  return (
    <Slider.Root class={styles.root()}>
      <Slider.Label class={styles.label()}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText()} />
      <Slider.Control class={styles.control()}>
        <Slider.Track class={styles.track()}>
          <Slider.Range class={styles.range()} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb()} index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

export const MinMax = () => {
  const styles = sliderStyles();

  return (
    <Slider.Root class={styles.root()} min={-10} max={10}>
      <Slider.Label class={styles.label()}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText()} />
      <Slider.Control class={styles.control()}>
        <Slider.Track class={styles.track()}>
          <Slider.Range class={styles.range()} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb()} index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

export const Range = () => {
  const styles = sliderStyles();

  return (
    <Slider.Root class={styles.root()} defaultValue={[5, 10]}>
      <Slider.Label class={styles.label()}>Label</Slider.Label>
      <Slider.ValueText class={styles.valueText()} />
      <Slider.Control class={styles.control()}>
        <Slider.Track class={styles.track()}>
          <Slider.Range class={styles.range()} />
        </Slider.Track>
        <Slider.Thumb class={styles.thumb()} index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
        <Slider.Thumb class={styles.thumb()} index={1}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};
