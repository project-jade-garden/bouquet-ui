<script lang="ts">
  import { hoverCardStyles } from "@bouquet-ui/design";
  import { HoverCard, Portal } from "../../../../src/lib";

  const styles = hoverCardStyles();
</script>

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