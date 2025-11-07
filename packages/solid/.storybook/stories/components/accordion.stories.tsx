import { accordionStyles } from "@bouquet-ui/design";
import { ChevronDownIcon } from "lucide-solid";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { Accordion } from "../../../src";

const meta = {
  title: "Components / Accordion"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = accordionStyles();

  return (
    <Accordion.Root class={styles.root()} value={["React"]}>
      <Index each={["React", "Solid", "Svelte", "Vue"]}>
        {(item) => (
          <Accordion.Item class={styles.item()} value={item()}>
            <Accordion.ItemTrigger class={styles.itemTrigger()}>
              What is {item()}?
              <Accordion.ItemIndicator class={styles.itemIndicator()}>
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent class={styles.itemContent()}>
              {item()} is a JavaScript library for building user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>
        )}
      </Index>
    </Accordion.Root>
  );
};
