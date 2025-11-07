import { type BlockquoteStyles, blockquoteStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    color: "surface"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    }
  },
  title: "Elements / Blockquote"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: BlockquoteStyles.Variants) => {
  const styles = blockquoteStyles(props);

  return (
    <blockquote className={styles}>
      The easy way is nevery right,
      <br />
      and the right way is never easy.
      <br />~ Engineers against AI
    </blockquote>
  );
};
