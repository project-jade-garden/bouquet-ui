<script setup lang="ts">
  import { selectStyles } from "@bouquet-ui/design";
  import { createListCollection, Select } from "../../../../src"

  const styles = selectStyles();
  const collection = createListCollection({
    items: ["React", "Solid", "Vue", "Svelte"]
  });
</script>

<template>
  <Select.Root :class="styles.root()" :collection="collection">
    <Select.Label :class="styles.label()">Framework</Select.Label>
    <Select.Control :class="styles.control()">
      <Select.Trigger :class="styles.trigger()">
        <Select.ValueText :class="styles.valueText()" placeholder="Select a Framework" />
        <Select.Indicator :class="styles.indicator()">
          <ChevronDownIcon />
        </Select.Indicator>
      </Select.Trigger>
      <Select.ClearTrigger :class="styles.clearTrigger()">Clear</Select.ClearTrigger>
    </Select.Control>
    <Teleport to="body">
      <Select.Positioner :class="styles.positioner()">
        <Select.Content :class="styles.content()">
          <Select.ItemGroup :class="styles.itemGroup()">
            <Select.ItemGroupLabel :class="styles.itemGroupLabel()">Frameworks</Select.ItemGroupLabel>
            <Select.Item :class="styles.item()" v-for="item in collection.items" :key="item" :item="item">
              <Select.ItemText :class="styles.itemText()">{{item}}</Select.ItemText>
              <Select.ItemIndicator :class="styles.itemIndicator()">✓</Select.ItemIndicator>
            </Select.Item>
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Teleport>
    <Select.HiddenSelect />
  </Select.Root>
</template>
