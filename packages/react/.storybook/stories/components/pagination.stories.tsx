import { paginationStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Pagination } from "../../../src";

const meta = {
  title: "Components / Pagination"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = paginationStyles();

  return (
    <Pagination.Root className={styles.root()} count={5000} pageSize={10} siblingCount={2}>
      <Pagination.PrevTrigger className={styles.prevTrigger()}>Previous Page</Pagination.PrevTrigger>
      <Pagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <Pagination.Item {...page} key={index} className={styles.item()}>
                {page.value}
              </Pagination.Item>
            ) : (
              <Pagination.Ellipsis className={styles.ellipsis()} key={index} index={index}>
                &#8230;
              </Pagination.Ellipsis>
            )
          )
        }
      </Pagination.Context>
      <Pagination.NextTrigger className={styles.nextTrigger()}>Next Page</Pagination.NextTrigger>
    </Pagination.Root>
  );
};
