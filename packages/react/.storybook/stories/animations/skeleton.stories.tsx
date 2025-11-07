import { type SkeletonStyles, skeletonStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";

const meta = {
  args: {
    speed: "slowest"
  },
  argTypes: {
    speed: {
      control: "select",
      options: ["fastest", "faster", "fast", "normal", "slow", "slower", "slowest", undefined]
    }
  },
  title: "Animations / Skeleton"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: SkeletonStyles.Variants) => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center gap-4">
        <div
          aria-busy="true"
          aria-label="loading"
          aria-live="polite"
          role="alert"
          className={skeletonStyles({ ...props, className: "size-12 rounded-full" })}
        />
        <div className="grid gap-2">
          <div
            aria-busy="true"
            aria-label="loading"
            aria-live="polite"
            role="alert"
            className={skeletonStyles({ ...props, className: "rounded-md h-4 w-[250px]" })}
          />
          <div
            aria-busy="true"
            aria-label="loading"
            aria-live="polite"
            role="alert"
            className={skeletonStyles({ ...props, className: "rounded-md h-4 w-[200px]" })}
          />
        </div>
      </div>
    </div>
  );
};
