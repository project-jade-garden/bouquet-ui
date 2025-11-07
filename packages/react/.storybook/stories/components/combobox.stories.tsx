import { type ComboboxStyles, comboboxStyles, iconStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { ChevronsUpDownIcon } from "lucide-react";
import { Combobox, Portal, useFilter, useListCollection } from "../../../src";

const meta = {
  args: {
    color: "primary",
    size: "md"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Combobox"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: ComboboxStyles.Variants) => {
  const styles = comboboxStyles(props);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter: contains
  });

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue);
  };

  return (
    <Combobox.Root className={styles.root()} collection={collection} onInputValueChange={handleInputChange}>
      <Combobox.Label className={styles.label()}>Framework</Combobox.Label>
      <Combobox.Control className={styles.control()}>
        <Combobox.Input className={styles.input({ className: inputStyles(props) })} />
        <Combobox.Trigger className={styles.trigger()}>
          <ChevronsUpDownIcon className={iconStyles({ size: "md" })} />
        </Combobox.Trigger>
        <Combobox.ClearTrigger className={styles.clearTrigger()}>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner className={styles.positioner()}>
          <Combobox.Content className={styles.content()}>
            <Combobox.ItemGroup className={styles.itemGroup()}>
              <Combobox.ItemGroupLabel className={styles.itemGroupLabel()}>Frameworks</Combobox.ItemGroupLabel>
              {collection.items.map((item) => (
                <Combobox.Item className={styles.item()} key={item} item={item}>
                  <Combobox.ItemText className={styles.itemText()}>{item}</Combobox.ItemText>
                  <Combobox.ItemIndicator className={styles.itemIndicator()}>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
