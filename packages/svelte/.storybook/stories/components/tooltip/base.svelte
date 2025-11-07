<script lang="ts">
  import { tooltipStyles } from "@bouquet-ui/design";
  import { Tooltip } from "../../../../src/lib";

  const styles = tooltipStyles();
</script>

<Tooltip.Root id="tooltip">
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
