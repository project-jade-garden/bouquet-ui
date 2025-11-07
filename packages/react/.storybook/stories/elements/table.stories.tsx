import { type TableStyles, tableStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

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
    <table className={styles.root()}>
      <caption className={styles.caption()}>Product Inventory</caption>
      <thead className={styles.thead()}>
        <tr className={styles.tr()}>
          <th className={styles.th()}>ID</th>
          <th className={styles.th()}>Name</th>
          <th className={styles.th()}>Stock</th>
          <th className={styles.th({ className: "text-right" })}>Price</th>
        </tr>
      </thead>
      <tbody>
        {productData.map((product, index) => (
          <tr key={index} className={styles.tr()}>
            <td className={styles.td({ className: "font-medium" })}>{product.id}</td>
            <td className={styles.td()}>{product.name}</td>
            <td className={styles.td()}>{product.stock}</td>
            <td className={styles.td({ className: "text-right" })}>{product.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot className={styles.tfoot()}>
        <tr className={styles.tr()}>
          <td colSpan={2} className={styles.td()}>
            Totals
          </td>
          <td className={styles.td()}>87</td>
          <td className={styles.td({ className: "text-right" })}>$34,163.00</td>
        </tr>
      </tfoot>
    </table>
  );
};
