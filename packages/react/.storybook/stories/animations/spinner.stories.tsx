import { type SpinnerStyles, spinnerStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    size: "md",
    speed: "slowest"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", undefined]
    },
    speed: {
      control: "select",
      options: ["fastest", "faster", "fast", "normal", "slow", "slower", "slowest", undefined]
    }
  },
  title: "Animations / Spinner"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: SpinnerStyles.Variants) => {
  return (
    <span className={spinnerStyles({ ...props, className: "border-primary" })}>
      <span className="sr-only">Spinner</span>
    </span>
  );
};
