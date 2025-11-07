<script setup lang="ts">
  import { hoverCardStyles } from "@bouquet-ui/design";
  import { HoverCard } from "../../../../src";

  const styles = hoverCardStyles();
</script>

<template>
  <HoverCard.Root>
    <HoverCard.Trigger :class="styles.trigger()">Hover me</HoverCard.Trigger>
    <Teleport to="body">
      <HoverCard.Positioner :class="styles.positioner()">
        <HoverCard.Content :class="styles.content()">
          <HoverCard.Arrow :class="styles.arrow()">
            <HoverCard.ArrowTip :class="styles.arrowTip()" />
          </HoverCard.Arrow>
          Content
        </HoverCard.Content>
      </HoverCard.Positioner>
    </Teleport>
  </HoverCard.Root>
</template>
