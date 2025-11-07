<script lang="ts">
  import { tagsInputStyles } from "@bouquet-ui/design";
  import { XIcon } from "lucide-svelte";
  import { TagsInput } from "../../../../src/lib";

  const styles = tagsInputStyles();
</script>


<TagsInput.Root
  class={styles.root()}
  validate={(details) => {
    return !details.value.includes(details.inputValue)
  }}
>
  <TagsInput.Context>
    {#snippet render(tagsInput)}
      <TagsInput.Label class={styles.label()}>Frameworks</TagsInput.Label>
      <TagsInput.Control class={styles.control()}>
        {#each tagsInput().value as value, index (index)}
          <TagsInput.Item class={styles.item()} {index} {value}>
            <TagsInput.ItemInput class={styles.itemInput()} />
            <TagsInput.ItemText class={styles.itemText()}>{value}</TagsInput.ItemText>
            <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>
              <XIcon />
            </TagsInput.ItemDeleteTrigger>
          </TagsInput.Item>
        {/each}
      </TagsInput.Control>
      <TagsInput.Input class={styles.input()} placeholder="Add Framework" />
      <TagsInput.ClearTrigger class={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
    {/snippet}
  </TagsInput.Context>
  <TagsInput.HiddenInput />
</TagsInput.Root>
