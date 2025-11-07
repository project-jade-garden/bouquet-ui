<script setup lang="ts">
  import { fieldStyles, inputStyles } from "@bouquet-ui/design";
  import { Field } from "../../../../src";

  const { disabled = false, invalid = false } = defineProps<{
    disabled?: boolean;
    invalid?: boolean;
  }>();
  const styles = fieldStyles();
</script>

<template>
  <Field.Root :class="styles.root()" :disabled="disabled" :invalid="invalid">
    <Field.Label :class="styles.label()">Label</Field.Label>
      <Field.Input
        :class="styles.input({ class: inputStyles({ color: invalid ? 'error' : 'primary' }) })"
        placeholder="Placeholder"
      />
    <Field.HelperText :class="styles.helperText()">Some additional Info</Field.HelperText>
    <Field.ErrorText :class="styles.errorText()">Error Info</Field.ErrorText>
  </Field.Root>
</template>
