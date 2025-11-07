<script setup lang="ts">
  import { type ComboboxStyles, comboboxStyles, iconStyles, inputStyles } from "@bouquet-ui/design";
  import { ChevronsUpDownIcon } from "lucide-vue-next";
  import { Combobox, useFilter, useListCollection } from "../../../../src";

  const props = defineProps<{
    color?: "primary" | "secondary" | "tertiary" | "success" | "info" | "warning" | "error" | "surface" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
  }>();

  const styles = comboboxStyles(props);
  const filters = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter: filters.value.contains,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }
</script>

<template>
  <Combobox.Root :class="styles.root()" :collection="collection" @input-value-change="handleInputChange">
  <Combobox.Label :class="styles.label()">Framework</Combobox.Label>
  <Combobox.Control :class="styles.control()">
    <Combobox.Input :class="styles.input({ class: inputStyles(props) })" />
    <Combobox.Trigger :class="styles.trigger()">
      <ChevronsUpDownIcon :class="iconStyles({ size: 'md' })" />
    </Combobox.Trigger>
    <Combobox.ClearTrigger :class="styles.clearTrigger()">Clear</Combobox.ClearTrigger>
  </Combobox.Control>
    <Teleport to="body">
      <Combobox.Positioner :class="styles.positioner()">
        <Combobox.Content :class="styles.content()">
          <Combobox.ItemGroup :class="styles.itemGroup()">
            <Combobox.ItemGroupLabel :class="styles.itemGroupLabel()">Frameworks</Combobox.ItemGroupLabel>
            <Combobox.Item :class="styles.item()" v-for="item in collection.items" :key="item" :item="item">
              <Combobox.ItemText :class="styles.itemText()">{{ item }}</Combobox.ItemText>
              <Combobox.ItemIndicator :class="styles.itemIndicator()">✓</Combobox.ItemIndicator>
            </Combobox.Item>
          </Combobox.ItemGroup>
        </Combobox.Content>
      </Combobox.Positioner>
    </Teleport>
  </Combobox.Root>
</template>
