import { type KbdStyles, kbdStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    color: "surface",
    size: "md",
    variant: "outline"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "soft", "subtle", undefined]
    }
  },
  title: "Elements / Kbd"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: KbdStyles.Variants) => {
  const styles = kbdStyles(props);

  return <kbd className={styles}>kbd</kbd>;
};
