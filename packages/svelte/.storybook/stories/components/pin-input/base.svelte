<script lang="ts">
  import { type PinInputStyles, pinInputStyles } from "@bouquet-ui/design";
  import { PinInput } from "../../../../src/lib";

  let props: PinInputStyles.Variants = $props();
  const styles = pinInputStyles(props);
</script>

<PinInput.Root class={styles.root()} onValueComplete={(e) => alert(e.valueAsString)}>
  <PinInput.Label class={styles.label()}>Label</PinInput.Label>
  <PinInput.Control class={styles.control()}>
    {#each [0, 1, 2] as index}
      <PinInput.Input class={styles.input()} {index} />
    {/each}
  </PinInput.Control>
  <PinInput.HiddenInput />
</PinInput.Root>