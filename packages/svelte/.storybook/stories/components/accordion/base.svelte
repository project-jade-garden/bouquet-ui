<script lang="ts">
  import { accordionStyles } from "@bouquet-ui/design";
  import { ChevronDownIcon } from "lucide-svelte";
  import { Accordion } from "../../../../src/lib";

  const items = ["React", "Solid", "Vue", "Svelte"]
  const styles = accordionStyles();
</script>

<Accordion.Root class={styles.root()} value={["React"]}>
  {#each items as item (item)}
    <Accordion.Item class={styles.item()} value={item}>
      <Accordion.ItemTrigger class={styles.itemTrigger()}>
        What is {item}?
        <Accordion.ItemIndicator class={styles.itemIndicator()}>
          <ChevronDownIcon />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent class={styles.itemContent()}>
        {item} is a JavaScript library for building user interfaces.
      </Accordion.ItemContent>
    </Accordion.Item>
  {/each}
</Accordion.Root>