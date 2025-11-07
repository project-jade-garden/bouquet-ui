<script setup lang="ts">
  import { type InputStyles, inputStyles } from "@bouquet-ui/design";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    highlight?: boolean | undefined;
    size?: "xs" | "sm" | "md" | "lg" | undefined;
    variant?: "outline" | "soft" | "subtle" | "ghost" | "none" | undefined;
    type?: "file" | undefined;
  }>();
  const styles = inputStyles({...props});
  const type = props.type === "file" ? "file" : "text";
</script>

<template>
  <input :class="styles" placeholder="Search..." :type="type" />
</template>