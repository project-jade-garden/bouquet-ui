<script lang="ts">
  import { type ComboboxStyles, comboboxStyles, iconStyles, inputStyles } from "@bouquet-ui/design";
  import { ChevronsUpDownIcon } from "lucide-svelte";
  import { Combobox, Portal, useFilter, useListCollection } from "../../../../src/lib"

  let props: ComboboxStyles.Variants = $props();
  const styles = comboboxStyles(props);

  const filters = useFilter({ sensitivity: "base" })

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText)
    },
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }
</script>

<Combobox.Root class={styles.root()} collection={collection()} onInputValueChange={handleInputChange}>
  <Combobox.Label class={styles.label()}>Framework</Combobox.Label>
  <Combobox.Control class={styles.control()}>
    <Combobox.Input class={styles.input({ class: inputStyles(props) })} />
    <Combobox.Trigger class={styles.trigger()}>
      <ChevronsUpDownIcon class={iconStyles({ size: "md" })} />
    </Combobox.Trigger>
    <Combobox.ClearTrigger class={styles.clearTrigger()}>Clear</Combobox.ClearTrigger>
  </Combobox.Control>
  <Portal>
    <Combobox.Positioner class={styles.positioner()}>
      <Combobox.Content class={styles.content()}>
        <Combobox.ItemGroup class={styles.itemGroup()}>
          <Combobox.ItemGroupLabel class={styles.itemGroupLabel()}>Frameworks</Combobox.ItemGroupLabel>
          {#each collection().items as item (item)}
            <Combobox.Item class={styles.item()} {item}>
              <Combobox.ItemText class={styles.itemText()}>{item}</Combobox.ItemText>
              <Combobox.ItemIndicator class={styles.itemIndicator()}>✓</Combobox.ItemIndicator>
            </Combobox.Item>
          {/each}
        </Combobox.ItemGroup>
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
</Combobox.Root>
