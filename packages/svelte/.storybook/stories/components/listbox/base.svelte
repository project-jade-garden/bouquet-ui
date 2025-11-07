<script lang="ts">
  import { listboxStyles } from "@bouquet-ui/design";
  import { createListCollection, Listbox } from "../../../../src/lib";

  const styles = listboxStyles();
  const collection = createListCollection({ items: ["React", "Solid", "Vue", "Svelte"] });
</script>

<Listbox.Root class={styles.root()} collection={collection}>
  <Listbox.Label class={styles.label()}>Select your Framework</Listbox.Label>
  <Listbox.Content class={styles.content()}>
    {#each collection.items as item}
      <Listbox.Item class={styles.item()} {item}>
        <Listbox.ItemText class={styles.itemText()}>{item}</Listbox.ItemText>
        <Listbox.ItemIndicator class={styles.itemIndicator()} />
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>
