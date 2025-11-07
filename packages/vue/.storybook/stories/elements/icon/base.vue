<script setup lang="ts">
  import { type IconStyles, iconStyles } from "@bouquet-ui/design";
  import { Lightbulb } from "lucide-vue-next";

  const props = defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  }>();
  const styles = iconStyles({...props});
</script>

<template>
  <Lightbulb :class="styles" />
</template>
