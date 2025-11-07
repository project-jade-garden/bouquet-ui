<script setup lang="ts">
  import { type SpinnerStyles, spinnerStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
    speed?: "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest" | undefined;
  }>();
</script>

<template>
  <span :class="spinnerStyles({ ...props, class: 'border-primary' })">
    <span class="sr-only">Spinner</span>
  </span>
</template>
