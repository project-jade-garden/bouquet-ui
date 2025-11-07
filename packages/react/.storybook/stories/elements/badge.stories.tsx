import { type BadgeStyles, badgeStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    color: "primary",
    pill: false,
    size: "md",
    variant: "solid"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    pill: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", undefined]
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "soft", "subtle", undefined]
    }
  },
  title: "Elements / Badge"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: BadgeStyles.Variants) => {
  const styles = badgeStyles(props);

  return <span className={styles}>Badge</span>;
};
