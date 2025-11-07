<script setup lang="ts">
  import { fieldStyles, textareaStyles } from "@bouquet-ui/design";
  import { Field } from "../../../../src";

  const { invalid = false } = defineProps<{
    disabled?: boolean;
    invalid?: boolean;
  }>();
  const styles = fieldStyles();
</script>

<template>
  <Field.Root :class="styles.root()" :disabled="disabled" :invalid="invalid">
    <Field.Label :class="styles.label()">Label</Field.Label>
      <Field.Input
        :class="styles.input({ class: textareaStyles({ color: invalid ? 'error' : 'primary' }) })"
        placeholder="Enter your message..."
        autoresize
      />
    <Field.HelperText :class="styles.helperText()">Some additional Info</Field.HelperText>
    <Field.ErrorText :class="styles.errorText()">Error Info</Field.ErrorText>
  </Field.Root>
</template>
