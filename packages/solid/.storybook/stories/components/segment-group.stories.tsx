import { type SegmentGroupStyles, segmentGroupStyles } from "@bouquet-ui/design";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { SegmentGroup } from "../../../src";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", undefined]
    }
  },
  title: "Components / Segment Group"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: SegmentGroupStyles.Variants) => {
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  const styles = segmentGroupStyles(props);

  return (
    <SegmentGroup.Root class={styles.root()}>
      <SegmentGroup.Indicator class={styles.indicator()} />
      <Index each={frameworks}>
        {(framework) => (
          <SegmentGroup.Item class={styles.item()} value={framework()}>
            <SegmentGroup.ItemText class={styles.itemText()}>{framework()}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl class={styles.itemControl()} />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        )}
      </Index>
    </SegmentGroup.Root>
  );
};

export const Disabled = (props: SegmentGroupStyles.Variants) => {
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  const styles = segmentGroupStyles(props);

  return (
    <SegmentGroup.Root class={styles.root()} value={"React"}>
      <SegmentGroup.Indicator class={styles.indicator()} />
      <Index each={frameworks}>
        {(framework) => (
          <SegmentGroup.Item class={styles.item()} value={framework()} disabled={framework() === "Svelte"}>
            <SegmentGroup.ItemText class={styles.itemText()}>{framework()}</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl class={styles.itemControl()} />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        )}
      </Index>
    </SegmentGroup.Root>
  );
};
