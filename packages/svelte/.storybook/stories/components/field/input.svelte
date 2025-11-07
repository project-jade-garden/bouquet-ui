<script lang="ts">
  import { fieldStyles, inputStyles } from "@bouquet-ui/design";
  import { Field } from "../../../../src/lib";

  let props: Field.RootProps = $props();
  const styles = fieldStyles();
</script>

<Field.Root {...props} class={styles.root()}>
  <Field.Label class={styles.label()}>Label</Field.Label>
  <Field.Input
    class={styles.input({ class: inputStyles({ color: props.invalid ? 'error' : 'primary' }) })}
    placeholder="Placeholder"
  />
  <Field.HelperText class={styles.helperText()}>Some additional Info</Field.HelperText>
  <Field.ErrorText class={styles.errorText()}>Error Info</Field.ErrorText>
</Field.Root>
