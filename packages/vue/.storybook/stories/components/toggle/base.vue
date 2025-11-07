<script setup lang="ts">
  import { toggleStyles } from "@bouquet-ui/design";
  import { BoldIcon } from "lucide-vue-next";
  import { Toggle } from "../../../../src";

  const { disabled = false } = defineProps<{
    disabled?: boolean;
  }>();
  const styles = toggleStyles();
</script>

<template>
  <Toggle.Root :class="styles.root()" :disabled="disabled">
    <BoldIcon />
  </Toggle.Root>
</template>
