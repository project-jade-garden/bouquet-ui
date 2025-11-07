import { hoverCardStyles } from "@bouquet-ui/design";
import { Portal } from "solid-js/web";
import type { Meta } from "storybook-solidjs-vite";
import { HoverCard } from "../../../src";

const meta = {
  title: "Components / Hover Card"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = hoverCardStyles();

  return (
    <HoverCard.Root>
      <HoverCard.Trigger class={styles.trigger()}>Hover me</HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner class={styles.positioner()}>
          <HoverCard.Content class={styles.content()}>
            <HoverCard.Arrow class={styles.arrow()}>
              <HoverCard.ArrowTip class={styles.arrowTip()} />
            </HoverCard.Arrow>
            Content
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
};
