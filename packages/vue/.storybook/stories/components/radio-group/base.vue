<script setup lang="ts">
  import { type RadioGroupStyles, radioGroupStyles } from "@bouquet-ui/design";
  import { ref } from "vue";
  import { RadioGroup } from "../../../../src";

  const { disabled = false, ...rest } = defineProps<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg" | undefined;
  }>();
  const styles = radioGroupStyles({ ...rest });

  const frameworks = ref(["React", "Solid", "Vue", "Svelte"]);
</script>

<template>
  <RadioGroup.Root :class="styles.root()" :disabled="disabled">
    <RadioGroup.Label :class="styles.label()">Framework</RadioGroup.Label>
    <RadioGroup.Indicator :class="styles.indicator()" />
    <RadioGroup.Item :class="styles.item()" v-for="framework in frameworks" :key="framework" :value="framework">
      <RadioGroup.ItemText :class="styles.itemText()">{{framework}}</RadioGroup.ItemText>
      <RadioGroup.ItemControl :class="styles.itemControl()" />
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
  </RadioGroup.Root>
</template>
