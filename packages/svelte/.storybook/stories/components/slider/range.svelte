<script lang="ts">
  import { sliderStyles } from "@bouquet-ui/design";
  import { Slider } from "../../../../src/lib";

  const styles = sliderStyles();
</script>

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
