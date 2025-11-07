import { selectStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { ChevronDownIcon } from "lucide-react";
import { createListCollection, Portal, Select } from "../../../src";

const meta = {
  title: "Components / Select"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const collection = createListCollection({ items: ["React", "Solid", "Vue", "Svelte"] });
  const styles = selectStyles();

  return (
    <Select.Root className={styles.root()} collection={collection}>
      <Select.Label className={styles.label()}>Framework</Select.Label>
      <Select.Control className={styles.control()}>
        <Select.Trigger className={styles.trigger()}>
          <Select.ValueText className={styles.valueText()} placeholder="Select a Framework" />
          <Select.Indicator className={styles.indicator()}>
            <ChevronDownIcon />
          </Select.Indicator>
        </Select.Trigger>
        <Select.ClearTrigger className={styles.clearTrigger()}>Clear</Select.ClearTrigger>
      </Select.Control>
      <Portal>
        <Select.Positioner className={styles.positioner()}>
          <Select.Content className={styles.content()}>
            <Select.ItemGroup className={styles.itemGroup()}>
              <Select.ItemGroupLabel className={styles.itemGroupLabel()}>Frameworks</Select.ItemGroupLabel>
              {collection.items.map((item) => (
                <Select.Item className={styles.item()} key={item} item={item}>
                  <Select.ItemText className={styles.itemText()}>{item}</Select.ItemText>
                  <Select.ItemIndicator className={styles.itemIndicator()}>✓</Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
