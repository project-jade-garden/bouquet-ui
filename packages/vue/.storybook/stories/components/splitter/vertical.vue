<script setup lang="ts">
  import { splitterStyles } from "@bouquet-ui/design";
  import { Splitter } from "../../../../src";

  const styles = splitterStyles();
</script>

<template>
  <Splitter.Root :class="styles.root()" orientation="vertical" :panels="[{ id: 'a' }, { id: 'b' }]">
    <Splitter.Panel :class="styles.panel()" id="a">
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger :class="styles.resizeTrigger()" id="a:b" aria-label="Resize" />
    <Splitter.Panel :class="styles.panel()" id="b">
      B
    </Splitter.Panel>
  </Splitter.Root>
</template>
