import { listboxStyles } from "@bouquet-ui/design";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { createListCollection, Listbox } from "../../../src";

const meta = {
  title: "Components / Listbox"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = listboxStyles();
  const collection = createListCollection({ items: ["React", "Solid", "Vue", "Svelte"] });

  return (
    <Listbox.Root class={styles.root()} collection={collection}>
      <Listbox.Label class={styles.label()}>Select your Framework</Listbox.Label>
      <Listbox.Content class={styles.content()}>
        <Index each={collection.items}>
          {(item) => (
            <Listbox.Item class={styles.item()} item={item()}>
              <Listbox.ItemText class={styles.itemText()}>{item()}</Listbox.ItemText>
              <Listbox.ItemIndicator class={styles.itemIndicator()} />
            </Listbox.Item>
          )}
        </Index>
      </Listbox.Content>
    </Listbox.Root>
  );
};
