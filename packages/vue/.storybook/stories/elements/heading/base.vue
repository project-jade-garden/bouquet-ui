<script setup lang="ts">
  import { type HeadingStyles, headingStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
  }>();
  const styles = headingStyles({...props});
</script>

<template>
  <h1 :class="styles">Heading</h1>
</template>
