<script lang="ts">
  import { paginationStyles } from "@bouquet-ui/design";
  import { Pagination } from "../../../../src/lib";

  const styles = paginationStyles();
</script>

<Pagination.Root class={styles.root()} count={5000} pageSize={10} siblingCount={2}>
  <Pagination.PrevTrigger class={styles.prevTrigger()}>Previous Page</Pagination.PrevTrigger>
  <Pagination.Context>
    {#snippet render(pagination)}
      {#each pagination().pages as page, index (index)}
        {#if page.type === 'page'}
          <Pagination.Item {...page} class={styles.item()}>
            {page.value}
          </Pagination.Item>
        {:else}
          <Pagination.Ellipsis class={styles.ellipsis()} {index}>&#8230;</Pagination.Ellipsis>
        {/if}
      {/each}
    {/snippet}
  </Pagination.Context>
  <Pagination.NextTrigger class={styles.nextTrigger()}>Next Page</Pagination.NextTrigger>
</Pagination.Root>
