import { type HeadingStyles, headingStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    variant: "h1"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", undefined]
    }
  },
  title: "Elements / Heading"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: HeadingStyles.Variants) => {
  const styles = headingStyles(props);

  return <h1 className={styles}>Heading</h1>;
};
