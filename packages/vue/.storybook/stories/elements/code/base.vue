<script setup lang="ts">
  import { type CodeStyles, codeStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
  }>();
  const styles = codeStyles({...props});
</script>

<template>
  <code :class="styles">@bouquet-ui/design</code>
</template>