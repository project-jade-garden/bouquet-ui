<script setup lang="ts">
  import { fieldStyles, fieldsetStyles } from "@bouquet-ui/design";
  import { Field, Fieldset } from "../../../../src";

  const { input } = fieldStyles();
  const styles = fieldsetStyles();
</script>

<template>
  <Fieldset.Root :class="styles.root()">
    <Fieldset.Legend :class="styles.legend()">Legend</Fieldset.Legend>
    <Field.Input :class="input()" type="text" />
    <Fieldset.HelperText :class="styles.helperText()">Helper text</Fieldset.HelperText>
    <Fieldset.ErrorText :class="styles.errorText()">Error text</Fieldset.ErrorText>
  </Fieldset.Root>
</template>
