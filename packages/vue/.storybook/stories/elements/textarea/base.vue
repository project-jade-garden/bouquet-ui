<script setup lang="ts">
  import { type TextareaStyles, textareaStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    highlight?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
  }>();
  const styles = textareaStyles({...props});
</script>

<template>
  <textarea :class="styles" placeholder="Type something..." />
</template>