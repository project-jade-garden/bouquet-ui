import { sliderStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Slider } from "../../../src";

const meta = {
  title: "Components / Slider"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = sliderStyles();

  return (
    <Slider.Root className={styles.root()}>
      <Slider.Label className={styles.label()}>Label</Slider.Label>
      <Slider.ValueText className={styles.valueText()} />
      <Slider.Control className={styles.control()}>
        <Slider.Track className={styles.track()}>
          <Slider.Range className={styles.range()} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb()} index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

export const MinMax = () => {
  const styles = sliderStyles();

  return (
    <Slider.Root className={styles.root()} min={-10} max={10}>
      <Slider.Label className={styles.label()}>Label</Slider.Label>
      <Slider.ValueText className={styles.valueText()} />
      <Slider.Control className={styles.control()}>
        <Slider.Track className={styles.track()}>
          <Slider.Range className={styles.range()} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb()} index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};

export const Range = () => {
  const styles = sliderStyles();

  return (
    <Slider.Root className={styles.root()} defaultValue={[5, 10]}>
      <Slider.Label className={styles.label()}>Label</Slider.Label>
      <Slider.ValueText className={styles.valueText()} />
      <Slider.Control className={styles.control()}>
        <Slider.Track className={styles.track()}>
          <Slider.Range className={styles.range()} />
        </Slider.Track>
        <Slider.Thumb className={styles.thumb()} index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
        <Slider.Thumb className={styles.thumb()} index={1}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  );
};
