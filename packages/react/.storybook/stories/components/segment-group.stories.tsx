import { type SegmentGroupStyles, segmentGroupStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
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
    <SegmentGroup.Root className={styles.root()}>
      <SegmentGroup.Indicator className={styles.indicator()} />
      {frameworks.map((framework) => (
        <SegmentGroup.Item className={styles.item()} key={framework} value={framework}>
          <SegmentGroup.ItemText className={styles.itemText()}>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl className={styles.itemControl()} />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
};

export const Disabled = (props: SegmentGroupStyles.Variants) => {
  const frameworks = ["React", "Solid", "Svelte", "Vue"];
  const styles = segmentGroupStyles(props);

  return (
    <SegmentGroup.Root className={styles.root()} defaultValue="React">
      <SegmentGroup.Indicator className={styles.indicator()} />
      {frameworks.map((framework) => (
        <SegmentGroup.Item
          className={styles.item()}
          key={framework}
          value={framework}
          disabled={framework === "Svelte"}
        >
          <SegmentGroup.ItemText className={styles.itemText()}>{framework}</SegmentGroup.ItemText>
          <SegmentGroup.ItemControl className={styles.itemControl()} />
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
};
