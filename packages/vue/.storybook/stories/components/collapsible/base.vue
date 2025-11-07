<script setup lang="ts">
  import { collapsibleStyles } from "@bouquet-ui/design";
  import { Collapsible, useForwardPropsEmits } from "../../../../src";

  const styles = collapsibleStyles();
  const props = defineProps<Collapsible.RootProps>();
  const emits = defineEmits<Collapsible.RootEmits>();
  const localProps = useForwardPropsEmits(props, emits);
</script>

<template>
  <Collapsible.Root :class="styles.root()" v-bind="localProps">
    <Collapsible.Trigger :class="styles.trigger()">
      Toggle
      <Collapsible.Indicator :class="styles.indicator()">
        <ChevronDownIcon />
      </Collapsible.Indicator>
    </Collapsible.Trigger>
    <Collapsible.Content :class="styles.content()">Content</Collapsible.Content>
  </Collapsible.Root>
</template>
