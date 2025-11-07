<script lang="ts">
  import { tagsInputStyles } from "@bouquet-ui/design";
  import { XIcon } from "lucide-svelte";
  import { TagsInput } from "../../../../src/lib";

  const styles = tagsInputStyles();
</script>

<TagsInput.Root class={styles.root()} value={["React", "Svelte", "Vue"]}>
  <TagsInput.Label class={styles.label()}>Frameworks</TagsInput.Label>
  <TagsInput.Control class={styles.control()}>
    <TagsInput.Context>
      {#snippet render(tags)}
        {#each tags().value as value, index (index)}
          <TagsInput.Item class={styles.item()} {index} {value}>
            <TagsInput.ItemPreview class={styles.itemPreview()}>
              <TagsInput.ItemText class={styles.itemText()}>{value}</TagsInput.ItemText>
              <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>
                <XIcon />
              </TagsInput.ItemDeleteTrigger>
            </TagsInput.ItemPreview>
            <TagsInput.ItemInput class={styles.itemInput()} />
          </TagsInput.Item>
        {/each}
      {/snippet}
    </TagsInput.Context>
    <TagsInput.Input class={styles.input()} placeholder="Add Framework" />
  </TagsInput.Control>
  <TagsInput.ClearTrigger class={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
  <TagsInput.HiddenInput />
</TagsInput.Root>
