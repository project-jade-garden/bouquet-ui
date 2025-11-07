import { popoverStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { ChevronRightIcon } from "lucide-react";
import { Popover } from "../../../src";

const meta = {
  title: "Components / Popover"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = popoverStyles();

  return (
    <Popover.Root>
      <Popover.Trigger className={styles.trigger()}>
        Click Me
        <Popover.Indicator className={styles.indicator()}>
          <ChevronRightIcon />
        </Popover.Indicator>
      </Popover.Trigger>
      <Popover.Positioner className={styles.positioner()}>
        <Popover.Content className={styles.content()}>
          <Popover.Title className={styles.title()}>Title</Popover.Title>
          <Popover.Description className={styles.description()}>Description</Popover.Description>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
