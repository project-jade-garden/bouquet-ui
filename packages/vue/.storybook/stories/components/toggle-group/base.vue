<script setup lang="ts">
  import { toggleGroupStyles } from "@bouquet-ui/design";
  import { ToggleGroup } from "../../../../src";

  const styles = toggleGroupStyles();
</script>

<template>
  <ToggleGroup.Root :class="styles.root()">
  <ToggleGroup.Item :class="styles.item()" value="a">
    A
  </ToggleGroup.Item>
  <ToggleGroup.Item :class="styles.item()" value="b">
    B
  </ToggleGroup.Item>
  <ToggleGroup.Item :class="styles.item()" value="c">
    C
  </ToggleGroup.Item>
</ToggleGroup.Root>

</template>
