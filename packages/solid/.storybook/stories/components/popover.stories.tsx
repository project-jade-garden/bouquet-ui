import { popoverStyles } from "@bouquet-ui/design";
import { ChevronRightIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { Popover } from "../../../src";

const meta = {
  title: "Components / Popover"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = popoverStyles();

  return (
    <Popover.Root>
      <Popover.Trigger class={styles.trigger()}>
        Click Me
        <Popover.Indicator class={styles.indicator()}>
          <ChevronRightIcon />
        </Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner class={styles.positioner()}>
        <Popover.Content class={styles.content()}>
          <Popover.Title class={styles.title()}>Title</Popover.Title>
          <Popover.Description class={styles.description()}>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
