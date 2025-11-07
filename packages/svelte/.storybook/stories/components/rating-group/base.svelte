<script lang="ts">
  import { type RatingGroupStyles, ratingGroupStyles } from "@bouquet-ui/design";
  import { StarIcon } from "lucide-svelte";
  import { RatingGroup } from "../../../../src/lib";

  let { size, ...rest }: RatingGroup.RootProps & RatingGroupStyles.Variants = $props();
  const styles = ratingGroupStyles();
</script>

<RatingGroup.Root {...rest} class={styles.root()} count={5} value={3}>
  <RatingGroup.Label class={styles.label()}>Label</RatingGroup.Label>
  <RatingGroup.Control class={styles.control()}>
    <RatingGroup.Context>
      {#snippet render(ratingGroup)}
        {#each ratingGroup().items as item}
          <RatingGroup.Item class={styles.item()} index={item}>
            <RatingGroup.ItemContext>
              {#snippet render(itemState)}
                {#if itemState().highlighted}
                  <StarIcon fill="current" />
                {:else}
                  <StarIcon />
                {/if}
              {/snippet}
            </RatingGroup.ItemContext>
          </RatingGroup.Item>
        {/each}
      {/snippet}
    </RatingGroup.Context>
    <RatingGroup.HiddenInput />
  </RatingGroup.Control>
</RatingGroup.Root>
