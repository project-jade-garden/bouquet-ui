import { type SpinnerStyles, spinnerStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";

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
    <span class={spinnerStyles({ ...props, class: "border-primary" })}>
      <span class="sr-only">Spinner</span>
    </span>
  );
};
