import { type TextareaStyles, textareaStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";

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
    }
  },
  title: "Elements / Textarea"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: TextareaStyles.Variants) => {
  const styles = textareaStyles(props);

  return <textarea class={styles} placeholder="Type something..." />;
};
