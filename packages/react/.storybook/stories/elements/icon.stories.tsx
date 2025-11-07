import { type IconStyles, iconStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Lightbulb } from "lucide-react";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", undefined]
    }
  },
  title: "Elements / Icon"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: IconStyles.Variants) => {
  const styles = iconStyles(props);

  return <Lightbulb className={styles} />;
};
