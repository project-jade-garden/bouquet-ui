<script lang="ts">
  import { selectStyles } from "@bouquet-ui/design";
  import { ChevronDownIcon } from "lucide-svelte";
  import { createListCollection, Portal, Select } from "../../../../src/lib";

  const collection = createListCollection({ items: ["React", "Solid", "Vue", "Svelte"] });
  const styles = selectStyles();
</script>

<Select.Root class={styles.root()} collection={collection}>
  <Select.Label class={styles.label()}>Framework</Select.Label>
  <Select.Control class={styles.control()}>
    <Select.Trigger class={styles.trigger()}>
      <Select.ValueText class={styles.valueText()} placeholder="Select a Framework" />
      <Select.Indicator class={styles.indicator()}>
        <ChevronDownIcon />
      </Select.Indicator>
    </Select.Trigger>
    <Select.ClearTrigger class={styles.clearTrigger()}>Clear</Select.ClearTrigger>
  </Select.Control>
  <Portal>
    <Select.Positioner class={styles.positioner()}>
      <Select.Content class={styles.content()}>
        <Select.ItemGroup class={styles.itemGroup()}>
          <Select.ItemGroupLabel class={styles.itemGroupLabel()}>Frameworks</Select.ItemGroupLabel>
          {#each collection.items as item}
            <Select.Item class={styles.item()} {item}>
              <Select.ItemText class={styles.itemText()}>{item}</Select.ItemText>
              <Select.ItemIndicator class={styles.itemIndicator()}>✓</Select.ItemIndicator>
            </Select.Item>
          {/each}
        </Select.ItemGroup>
      </Select.Content>
    </Select.Positioner>
  </Portal>
  <Select.HiddenSelect />
</Select.Root>
