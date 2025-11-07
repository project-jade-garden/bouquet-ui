import { type LinkStyles, linkStyles } from "@bouquet-ui/design";
import { ArrowRightIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";

const meta = {
  args: {
    color: "primary"
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "success", "info", "warning", "error", "surface", undefined]
    }
  },
  title: "Elements / Link"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: LinkStyles.Variants) => {
  const styles = linkStyles(props);

  return (
    <a
      href="https://www.mozilla.org/"
      onClick={(e) => {
        e.preventDefault();
      }}
      class={styles}
    >
      Link
      <ArrowRightIcon />
    </a>
  );
};
