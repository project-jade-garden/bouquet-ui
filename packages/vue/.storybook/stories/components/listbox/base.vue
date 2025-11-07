<script setup lang="ts">
  import { listboxStyles } from "@bouquet-ui/design";
  import { createListCollection, Listbox } from "../../../../src";

  const styles = listboxStyles();
  const collection = createListCollection({
    items: ["React", "Solid", "Vue", "Svelte"],
  })
</script>

<template>
  <Listbox.Root :class="styles.root()" :collection="collection">
    <Listbox.Label :class="styles.label()">Select your Framework</Listbox.Label>
    <Listbox.Content :class="styles.content()">
      <Listbox.Item :class="styles.item()" v-for="item in collection.items" :key="item" :item="item">
        <Listbox.ItemText :class="styles.itemText()">{{ item }}</Listbox.ItemText>
        <Listbox.ItemIndicator :class="styles.itemIndicator()" />
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
