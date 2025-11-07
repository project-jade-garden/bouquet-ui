import { type LabelStyles, labelStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", undefined]
    }
  },
  title: "Elements / Label"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: LabelStyles.Variants) => {
  const styles = labelStyles(props);

  return <label className={styles}>Label</label>;
};
