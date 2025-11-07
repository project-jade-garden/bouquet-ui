<script setup lang="ts">
  import { type LinkStyles, linkStyles } from "@bouquet-ui/design";
  import { ArrowRightIcon } from "lucide-vue-next";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
  }>();
  const styles = linkStyles({...props});
</script>

<template>
  <a
    href="https://www.mozilla.org/"
    :class="styles"
    v-on:click="(e) => {
      e.preventDefault();
    }"
  >
    Link
    <ArrowRightIcon />
  </a>
</template>
