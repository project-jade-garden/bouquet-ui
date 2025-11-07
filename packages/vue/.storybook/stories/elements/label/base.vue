<script setup lang="ts">
  import { type LabelStyles, labelStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    size?: "xs" | "sm" | "md" | undefined;
  }>();
  const styles = labelStyles({...props});
</script>

<template>
  <label :class="styles" for="">Label</label>
</template>