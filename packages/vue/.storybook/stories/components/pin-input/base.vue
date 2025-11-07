<script setup lang="ts">
  import { type PinInputStyles, pinInputStyles } from "@bouquet-ui/design";
  import { PinInput } from "../../../../src";

  const props = defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  }>();
  const styles = pinInputStyles(props);
</script>

<template>
  <PinInput.Root :class="styles.root()">
    <PinInput.Label :class="styles.label()">Label</PinInput.Label>
    <PinInput.Control :class="styles.control()">
      <PinInput.Input :class="styles.input()" v-for="id in [0, 1, 2]" :key="id" :index="id" />
    </PinInput.Control>
    <PinInput.HiddenInput />
  </PinInput.Root>
</template>
