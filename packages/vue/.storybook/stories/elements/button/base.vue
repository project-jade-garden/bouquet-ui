<script setup lang="ts">
  import { buttonStyles } from "@bouquet-ui/design";
  import { ArrowRightIcon } from "lucide-vue-next";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    variant?: "solid" | "outline" | "ghost" | "link" | "soft" | "subtle" | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  }>();
  const styles = buttonStyles({...props});
</script>

<template>
  <button :class="styles">
    Button
    <ArrowRightIcon />
  </button>
</template>
