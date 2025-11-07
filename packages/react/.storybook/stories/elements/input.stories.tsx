import { type InputStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    color: "primary",
    size: "md",
    variant: "outline"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    highlight: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["md", "xs", "sm", "lg", undefined]
    },
    variant: {
      control: "select",
      options: ["outline", "ghost", "soft", "subtle", "none", undefined]
    },
    type: {
      control: "radio",
      options: ["file", undefined]
    }
  },
  title: "Elements / Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: InputStyles.Variants) => {
  const styles = inputStyles(props);
  const type = props.type === "file" ? "file" : "text";

  return <input className={styles} placeholder="Search..." type={type} />;
};
