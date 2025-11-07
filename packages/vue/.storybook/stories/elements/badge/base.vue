<script setup lang="ts">
  import { type BadgeStyles, badgeStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    pill?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    variant?: "solid" | "outline" | "soft" | "subtle" | undefined;
  }>();
  const styles = badgeStyles({...props});
</script>

<template>
  <span :class="styles">Badge</span>
</template>
