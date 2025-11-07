import { type SkeletonStyles, skeletonStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";

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
    <div class="flex justify-center p-4">
      <div class="flex items-center gap-4">
        <div
          aria-busy="true"
          aria-label="loading"
          aria-live="polite"
          role="alert"
          class={skeletonStyles({ ...props, class: "size-12 rounded-full" })}
        />
        <div class="grid gap-2">
          <div
            aria-busy="true"
            aria-label="loading"
            aria-live="polite"
            role="alert"
            class={skeletonStyles({ ...props, class: "rounded-md h-4 w-[250px]" })}
          />
          <div
            aria-busy="true"
            aria-label="loading"
            aria-live="polite"
            role="alert"
            class={skeletonStyles({ ...props, class: "rounded-md h-4 w-[200px]" })}
          />
        </div>
      </div>
    </div>
  );
};
