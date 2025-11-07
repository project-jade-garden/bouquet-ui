<script lang="ts">
  import { type CheckboxStyles, checkboxStyles } from "@bouquet-ui/design";
  import { CheckIcon } from "lucide-svelte";
  import { Checkbox } from "../../../../src/lib";

  let props:  CheckboxStyles.Variants = $props();
  const styles = checkboxStyles(props);
</script>

<Checkbox.Root class={styles.root()}>
  <Checkbox.Label class={styles.label()}>Checkbox</Checkbox.Label>
  <Checkbox.Control class={styles.control()}>
    <Checkbox.Indicator class={styles.indicator()}>
      <CheckIcon />
    </Checkbox.Indicator>
  </Checkbox.Control>
  <Checkbox.HiddenInput />
</Checkbox.Root>
