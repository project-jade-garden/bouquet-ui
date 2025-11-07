import { selectStyles } from "@bouquet-ui/design";
import { ChevronDownIcon } from "lucide-solid";
import { Index, Portal } from "solid-js/web";
import type { Meta } from "storybook-solidjs-vite";
import { createListCollection, Select } from "../../../src";

const meta = {
  title: "Components / Select"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const collection = createListCollection({ items: ["React", "Solid", "Vue", "Svelte"] });
  const styles = selectStyles();

  return (
    <Select.Root class={styles.root()} collection={collection}>
      <Select.Label class={styles.label()}>Framework</Select.Label>
      <Select.Control class={styles.control()}>
        <Select.Trigger class={styles.trigger()}>
          <Select.ValueText class={styles.valueText()} placeholder="Select a Framework" />
          <Select.Indicator class={styles.indicator()}>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger class={styles.clearTrigger()}>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner class={styles.positioner()}>
          <Select.Content class={styles.content()}>
            <Select.ItemGroup class={styles.itemGroup()}>
              <Select.ItemGroupLabel class={styles.itemGroupLabel()}>Frameworks</Select.ItemGroupLabel>
              <Index each={collection.items}>
                {(item) => (
                  <Select.Item class={styles.item()} item={item()}>
                    <Select.ItemText class={styles.itemText()}>{item()}</Select.ItemText>
                    <Select.ItemIndicator class={styles.itemIndicator()}>✓</Select.ItemIndicator>
                  </Select.Item>
                )}
              </Index>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
