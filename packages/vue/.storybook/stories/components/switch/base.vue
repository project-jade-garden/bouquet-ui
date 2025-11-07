<script setup lang="ts">
  import { type SwitchStyles, switchStyles } from "@bouquet-ui/design";
  import { Switch } from "../../../../src";

  const { disabled = false } = defineProps<{
    disabled?: boolean;
  }>();
  const styles = switchStyles();
</script>

<template>
  <Switch.Root :class="styles.root()" :disabled="disabled">
    <Switch.Control :class="styles.control()">
      <Switch.Thumb :class="styles.thumb()" />
    </Switch.Control>
    <Switch.Label :class="styles.label()">Label</Switch.Label>
    <Switch.HiddenInput />
  </Switch.Root>
</template>
