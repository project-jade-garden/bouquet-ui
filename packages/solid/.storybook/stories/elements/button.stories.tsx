import { type ButtonStyles, buttonStyles } from "@bouquet-ui/design";
import { ArrowRightIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";

const meta = {
  args: {
    color: "primary",
    size: "md",
    variant: "solid"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", undefined]
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link", undefined]
    }
  },
  title: "Elements / Button"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: ButtonStyles.Variants) => {
  const styles = buttonStyles(props);

  return (
    <button class={styles}>
      Button
      <ArrowRightIcon />
    </button>
  );
};
