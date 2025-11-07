<script setup lang="ts">
  import { type SegmentGroupStyles, segmentGroupStyles } from "@bouquet-ui/design";
  import { ref } from "vue";
  import { SegmentGroup } from "../../../../src";

  const props = defineProps<{
    size?: "sm" | "md" | undefined;
  }>();
  const styles = segmentGroupStyles(props);
  const frameworks = ref(["React", "Solid", "Svelte", "Vue"]);
</script>

<template>
  <SegmentGroup.Root :class="styles.root()" model-value="React">
    <SegmentGroup.Indicator :class="styles.indicator()" />
    <SegmentGroup.Item
      :class="styles.item()"
      v-for="framework in frameworks"
      :key="framework"
      :value="framework"
      :disabled="framework === 'Svelte'"
    >
      <SegmentGroup.ItemText :class="styles.itemText()">{{framework}}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl :class="styles.itemControl()" />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  </SegmentGroup.Root>
</template>
