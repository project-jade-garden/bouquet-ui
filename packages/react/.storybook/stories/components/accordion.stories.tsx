import { accordionStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "../../../src";

const meta = {
  title: "Components / Accordion"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = accordionStyles();

  return (
    <Accordion.Root className={styles.root()} defaultValue={["React"]} multiple>
      {["React", "Solid", "Svelte", "Vue"].map((item) => (
        <Accordion.Item className={styles.item()} key={item} value={item}>
          <Accordion.ItemTrigger className={styles.itemTrigger()} disabled={item === "Svelte"}>
            What is {item}?
            <Accordion.ItemIndicator className={styles.itemIndicator()}>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className={styles.itemContent()}>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
