<script lang="ts">
  import { fieldStyles, textareaStyles } from "@bouquet-ui/design";
  import { Field } from "../../../../src/lib";

  let props: Field.RootProps = $props();
  const styles = fieldStyles();
</script>

<Field.Root {...props} class={styles.root()}>
  <Field.Label class={styles.label()}>Label</Field.Label>
  <Field.Textarea
    class={styles.input({ class: textareaStyles({ color: props.invalid ? 'error' : 'primary' }) })}
    placeholder="Enter your message..."
    autoresize
  />
  <Field.HelperText class={styles.helperText()}>Some additional Info</Field.HelperText>
  <Field.ErrorText class={styles.errorText()}>Error Info</Field.ErrorText>
</Field.Root>
