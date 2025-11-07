<script setup lang="ts">
  import { type ProgressStyles, progressStyles } from "@bouquet-ui/design";
  import { Progress } from "../../../../src";

  const props = defineProps<{
    color?: "primary" | "secondary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
  }>();
  const styles = progressStyles(props);
</script>

<template>
  <Progress.Root :class="styles.root()" :defaultValue="42">
    <Progress.Label :class="styles.label()">Label</Progress.Label>
    <Progress.ValueText :class="styles.valueText()" />
    <Progress.Track :class="styles.track()">
      <Progress.Range :class="styles.range()" />
    </Progress.Track>
  </Progress.Root>
</template>