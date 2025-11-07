import { paginationStyles } from "@bouquet-ui/design";
import { For } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { Pagination } from "../../../src";

const meta = {
  title: "Components / Pagination"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = paginationStyles();

  return (
    <Pagination.Root class={styles.root()} count={5000} pageSize={10} siblingCount={2}>
      <Pagination.PrevTrigger class={styles.prevTrigger()}>Previous Page</Pagination.PrevTrigger>
      <Pagination.Context>
        {(api) => (
          <For each={api().pages}>
            {(page, index) =>
              page.type === "page" ? (
                <Pagination.Item {...page} class={styles.item()}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis class={styles.ellipsis()} index={index()}>
                  &#8230;
                </Pagination.Ellipsis>
              )
            }
          </For>
        )}
      </Pagination.Context>
      <Pagination.NextTrigger class={styles.nextTrigger()}>Next Page</Pagination.NextTrigger>
    </Pagination.Root>
  );
};
