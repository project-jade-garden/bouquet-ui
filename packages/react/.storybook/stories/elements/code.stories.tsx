import { type CodeStyles, codeStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    color: "primary",
    size: "md"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Elements / Code"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: CodeStyles.Variants) => {
  const styles = codeStyles(props);

  return <code className={styles}>@bouquet-ui/design</code>;
};
