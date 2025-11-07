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
    <Progress.Circle :class="styles.circle()">
      <Progress.CircleTrack :class="styles.circleTrack()" />
      <Progress.CircleRange :class="styles.circleRange()" />
    </Progress.Circle>
  </Progress.Root>
</template>