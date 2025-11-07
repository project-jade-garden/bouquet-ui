import { hoverCardStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { HoverCard, Portal } from "../../../src";

const meta = {
  title: "Components / Hover Card"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = hoverCardStyles();

  return (
    <HoverCard.Root>
      <HoverCard.Trigger className={styles.trigger()}>Hover me</HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner className={styles.positioner()}>
          <HoverCard.Content className={styles.content()}>
            <HoverCard.Arrow className={styles.arrow()}>
              <HoverCard.ArrowTip className={styles.arrowTip()} />
            </HoverCard.Arrow>
            Content
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
};
