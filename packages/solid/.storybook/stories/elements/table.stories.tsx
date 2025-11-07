import { type TableStyles, tableStyles } from "@bouquet-ui/design";
import { For } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";

const meta: Meta = {
  args: {
    size: "md",
    variant: "plain"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outline", "plain", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", undefined]
    }
  },
  title: "Elements / Table"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: TableStyles.Variants) => {
  const styles = tableStyles(props);
  const productData = [
    { id: "P001", name: "MacBook Pro", stock: 12, price: "$1999.00" },
    { id: "P002", name: "AirPods Pro", stock: 25, price: "$249.00" },
    { id: "P003", name: "Leather Wallet", stock: 50, price: "$79.00" }
  ];

  return (
    <table class={styles.root()}>
      <caption class={styles.caption()}>Product Inventory</caption>
      <thead class={styles.thead()}>
        <tr class={styles.tr()}>
          <th class={styles.th()}>ID</th>
          <th class={styles.th()}>Name</th>
          <th class={styles.th()}>Stock</th>
          <th class={styles.th({ class: "text-right" })}>Price</th>
        </tr>
      </thead>
      <tbody>
        <For each={productData}>
          {(product) => (
            <tr class={styles.tr()}>
              <td class={styles.td({ class: "font-medium" })}>{product.id}</td>
              <td class={styles.td()}>{product.name}</td>
              <td class={styles.td()}>{product.stock}</td>
              <td class={styles.td({ class: "text-right" })}>{product.price}</td>
            </tr>
          )}
        </For>
      </tbody>
      <tfoot class={styles.tfoot()}>
        <tr class={styles.tr()}>
          <td colSpan={2} class={styles.td()}>
            Totals
          </td>
          <td class={styles.td()}>87</td>
          <td class={styles.td({ class: "text-right" })}>$34,163.00</td>
        </tr>
      </tfoot>
    </table>
  );
};
