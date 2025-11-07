<script setup lang="ts">
  import { editableStyles } from "@bouquet-ui/design";
  import { Editable } from "../../../../src";

  const styles = editableStyles();
</script>

<template>
  <Editable.Root :class="styles.root()" placeholder="Placeholder">
    <Editable.Label :class="styles.label()">Label</Editable.Label>
    <Editable.Area :class="styles.area()">
      <Editable.Input :class="styles.input()" />
      <Editable.Preview :class="styles.preview()" />
    </Editable.Area>
  </Editable.Root>
</template>
