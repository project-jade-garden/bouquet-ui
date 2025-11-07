import { sva } from "jade-garden/sva";

export const ratingGroupStyles = sva(
  {
    name: "rating-group",
    slots: ["root", "label", "item", "control"],
    base: {
      root: "v-stack-1.5",
      label: "text-default font-medium",
      item: [
        // Borders
        "focus-visible:outline-none",

        // Interactivity
        "cursor-pointer",

        // SVG
        "fill-bg-emphasized",
        "highlighted:fill-default",

        // Transitions & Animation
        "transition-[color,_fill]",
        "duration-200",
        "ease-in"
      ],
      control: "flex"
    },
    variants: {
      size: {
        sm: {
          control: "gap-0",
          item: "icon:size-4",
          label: "text-sm"
        },
        md: {
          control: "gap-0.5",
          item: "icon:size-5",
          label: "text-sm"
        },
        lg: {
          control: "gap-0.5",
          item: "icon:size-6",
          label: "text-md"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "Allows users to rate items using a set of icons.",
    name: "Rating Group",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/rating-group"
  }
);

export type * as RatingGroupStyles from "./types";
