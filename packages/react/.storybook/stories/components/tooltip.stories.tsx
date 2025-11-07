import { tooltipStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Tooltip } from "../../../src";

const meta = {
  title: "Components / Tooltip"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = tooltipStyles();

  return (
    <Tooltip.Root>
      <Tooltip.Trigger className={styles.trigger()}>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner className={styles.positioner()}>
        <Tooltip.Content className={styles.content()}>
          <Tooltip.Arrow className={styles.arrow()}>
            <Tooltip.ArrowTip className={styles.arrowTip()} />
          </Tooltip.Arrow>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
