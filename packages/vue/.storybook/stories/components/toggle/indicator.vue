<script setup lang="ts">
  import { toggleStyles } from "@bouquet-ui/design";
  import { Volume, VolumeOff } from "lucide-vue-next";
  import { Toggle } from "../../../../src";

  const { disabled = false } = defineProps<{
    disabled?: boolean;
  }>();
  const styles = toggleStyles();
</script>

<template>
  <Toggle.Root :class="styles.root()" :disabled="disabled">
    <Toggle.Indicator :class="styles.indicator()">
      <template #fallback>
        <Volume />
      </template>
      <VolumeOff />
    </Toggle.Indicator>
  </Toggle.Root>
</template>
