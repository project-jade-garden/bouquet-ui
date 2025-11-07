import { tooltipStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Tooltip } from "../../../src";

const meta = {
  title: "Components / Tooltip"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = tooltipStyles();

  return (
    <Tooltip.Root>
      <Tooltip.Trigger class={styles.trigger()}>Hover Me</Tooltip.Trigger>
      <Tooltip.Positioner class={styles.positioner()}>
        <Tooltip.Content class={styles.content()}>
          <Tooltip.Arrow class={styles.arrow()}>
            <Tooltip.ArrowTip class={styles.arrowTip()} />
          </Tooltip.Arrow>
          I am a tooltip!
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
};
