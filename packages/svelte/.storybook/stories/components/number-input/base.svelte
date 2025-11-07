<script lang="ts">
  import { type NumberInputStyles, numberInputStyles } from "@bouquet-ui/design";
  import { NumberInput } from "../../../../src/lib";

  let props: NumberInputStyles.Variants = $props();
  const styles = numberInputStyles(props);
</script>

<NumberInput.Root class={styles.root()}>
  <NumberInput.Label class={styles.label()}>Label</NumberInput.Label>
  <NumberInput.Input class={styles.input()} />
  <NumberInput.Control class={styles.control()}>
    <NumberInput.DecrementTrigger class={styles.decrementTrigger()}>-1</NumberInput.DecrementTrigger>
    <NumberInput.IncrementTrigger class={styles.incrementTrigger()}>+1</NumberInput.IncrementTrigger>
  </NumberInput.Control>
</NumberInput.Root>
