<script setup lang="ts">
  import { splitterStyles } from "@bouquet-ui/design";
  import { Splitter } from "../../../../src";

  const styles = splitterStyles();
</script>

<template>
  <Splitter.Root
    :class="styles.root()"
    :default-size="[15, 20]"
    :panels="[
      { id: 'a', collapsible: true, collapsedSize: 5, minSize: 10, maxSize: 20 },
      { id: 'b', minSize: 50 },
    ]"
  >
    <Splitter.Panel :class="styles.panel()" id="a">
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger :class="styles.resizeTrigger()" id="a:b" aria-label="Resize" />
    <Splitter.Panel :class="styles.panel()" id="b">
      B
    </Splitter.Panel>
  </Splitter.Root>
</template>
