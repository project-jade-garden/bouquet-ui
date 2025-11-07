import { collapsibleStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { ChevronDownIcon } from "lucide-react";
import { Collapsible } from "../../../src";

const meta = {
  title: "Components / Collapsible"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = collapsibleStyles();

  return (
    <Collapsible.Root className={styles.root()}>
      <Collapsible.Trigger className={styles.trigger()}>
        Toggle
        <Collapsible.Indicator className={styles.indicator()}>
          <ChevronDownIcon />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content className={styles.content()}>Content</Collapsible.Content>
    </Collapsible.Root>
  );
};
