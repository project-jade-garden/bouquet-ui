<script lang="ts">
  import { type SegmentGroupStyles, segmentGroupStyles } from "@bouquet-ui/design";
  import { SegmentGroup } from "../../../../src/lib";

  let props: SegmentGroupStyles.Variants = $props();
  const styles = segmentGroupStyles(props);

  const frameworks = ["React", "Solid", "Svelte", "Vue"];
</script>

<SegmentGroup.Root class={styles.root()} defaultValue="React">
  <SegmentGroup.Indicator class={styles.indicator()} />
  {#each frameworks as framework}
    <SegmentGroup.Item class={styles.item()} value={framework} disabled={framework === "Svelte"}>
      <SegmentGroup.ItemText class={styles.itemText()}>{framework}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl class={styles.itemControl()} />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  {/each}
</SegmentGroup.Root>

