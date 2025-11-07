import { type IconStyles, iconStyles } from "@bouquet-ui/design";
import { Lightbulb } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";

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

  return <Lightbulb class={styles} />;
};
