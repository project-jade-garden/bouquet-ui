<script setup lang="ts">
  import { type CheckboxStyles, checkboxStyles } from "@bouquet-ui/design";
  import { CheckIcon } from "lucide-vue-next";
  import { Checkbox } from "../../../../src";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
  }>();
  const styles = checkboxStyles(props);
</script>

<template>
  <Checkbox.Root :class="styles.root()">
    <Checkbox.Label :class="styles.label()">Checkbox</Checkbox.Label>
    <Checkbox.Control :class="styles.control()">
      <Checkbox.Indicator :class="styles.indicator()">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
</template>
