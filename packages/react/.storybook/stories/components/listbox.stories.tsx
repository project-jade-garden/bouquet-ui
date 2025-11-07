import { listboxStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { createListCollection, Listbox } from "../../../src";

const meta = {
  title: "Components / Listbox"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = listboxStyles();
  const collection = createListCollection({ items: ["React", "Solid", "Vue", "Svelte"] });

  return (
    <Listbox.Root className={styles.root()} collection={collection}>
      <Listbox.Label className={styles.label()}>Select your Framework</Listbox.Label>
      <Listbox.Content className={styles.content()}>
        {collection.items.map((item) => (
          <Listbox.Item className={styles.item()} key={item} item={item}>
            <Listbox.ItemText className={styles.itemText()}>{item}</Listbox.ItemText>
            <Listbox.ItemIndicator className={styles.itemIndicator()} />
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
};
