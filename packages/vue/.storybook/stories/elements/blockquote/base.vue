<script setup lang="ts">
  import { type BlockquoteStyles, blockquoteStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
  }>();
  const styles = blockquoteStyles({...props});
</script>

<template>
  <blockquote :class="styles">
    The easy way is nevery right,
    <br />
    and the right way is never easy.
    <br />~ Engineers against AI
  </blockquote>
</template>
