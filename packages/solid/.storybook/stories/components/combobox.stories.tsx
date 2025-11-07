import { type ComboboxStyles, comboboxStyles, iconStyles, inputStyles } from "@bouquet-ui/design";
import { ChevronsUpDownIcon } from "lucide-solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";
import type { Meta } from "storybook-solidjs-vite";
import { Combobox, useFilter, useListCollection } from "../../../src";

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
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: ["React", "Solid", "Vue", "Svelte"],
    filter: filterFn().contains
  });

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue);
  };

  return (
    <Combobox.Root class={styles.root()} collection={collection()} onInputValueChange={handleInputChange}>
      <Combobox.Label class={styles.label()}>Framework</Combobox.Label>
      <Combobox.Control class={styles.control()}>
        <Combobox.Input class={styles.input({ class: inputStyles(props) })} />
        <Combobox.Trigger class={styles.trigger()}>
          <ChevronsUpDownIcon class={iconStyles({ size: "md" })} />
        </Combobox.Trigger>
        <Combobox.ClearTrigger class={styles.clearTrigger()}>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner class={styles.positioner()}>
          <Combobox.Content class={styles.content()}>
            <Combobox.ItemGroup class={styles.itemGroup()}>
              <Combobox.ItemGroupLabel class={styles.itemGroupLabel()}>Frameworks</Combobox.ItemGroupLabel>
              <For each={collection().items}>
                {(item) => (
                  <Combobox.Item class={styles.item()} item={item}>
                    <Combobox.ItemText class={styles.itemText()}>{item}</Combobox.ItemText>
                    <Combobox.ItemIndicator class={styles.itemIndicator()}>✓</Combobox.ItemIndicator>
                  </Combobox.Item>
                )}
              </For>
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
