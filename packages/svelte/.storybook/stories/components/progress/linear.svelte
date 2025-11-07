<script lang="ts">
  import { type ProgressStyles, progressStyles } from "@bouquet-ui/design";
  import { Progress } from "../../../../src/lib";

  let props: ProgressStyles.Variants = $props();
  const styles = progressStyles(props);

  let value = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      value = value === 100 ? 0 : value + 1;
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });
</script>

<Progress.Root class={styles.root()} {value} min={0} max={100}>
  <Progress.Label class={styles.label()}>Label</Progress.Label>
  <Progress.ValueText class={styles.valueText()} />
  <Progress.Track class={styles.track()}>
    <Progress.Range class={styles.range()} />
  </Progress.Track>
</Progress.Root>