import { collapsibleStyles } from "@bouquet-ui/design";
import { ChevronDownIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { Collapsible } from "../../../src";

const meta = {
  title: "Components / Collapsible"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = collapsibleStyles();

  return (
    <Collapsible.Root class={styles.root()}>
      <Collapsible.Trigger class={styles.trigger()}>
        Toggle
        <Collapsible.Indicator class={styles.indicator()}>
          <ChevronDownIcon />
        </Collapsible.Indicator>
      </Collapsible.Trigger>
      <Collapsible.Content class={styles.content()}>Content</Collapsible.Content>
    </Collapsible.Root>
  );
};
