import { sva } from "jade-garden/sva";

export const segmentGroupStyles = sva(
  {
    name: "segment-group",
    slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
    base: {
      root: [
        // Layout
        "flex",

        // Flexbox & Grid
        "items-start",
        "horizontal:gap-4",
        "horizontal:flex-row",
        "horizontal:border-b",
        "vertical:gap-1",
        "vertical:flex-col",
        "vertical:border-l"
      ],
      item: [
        // Spacing
        "horizontal:px-1",
        "horizontal:pb-3",
        "vertical:px-3",
        "vertical:py-1.5",

        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Typography
        "text-muted",
        "disabled:text-dimmed",
        "checked:text-default",
        "font-medium",
        "checked:font-semibold",

        // Transitions & Animation
        "transition-[color]",
        "duration-200",
        "ease-in"
      ],
      indicator: [
        // Sizing
        "horizontal:w-[50px]",
        "vertical:h-9",

        // Borders
        "border-accented",
        "horizontal:border-b-2",
        "vertical:border-l-2",

        // Layout
        "horizontal:bottom-0",

        // Transforms
        "horizontal:translate-y-px",
        "vertical:-translate-x-px"
      ]
    },
    variants: {
      size: {
        sm: {
          item: "text-sm"
        },
        md: {
          item: "text-md"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "Organizes and navigates between sections in a view.",
    name: "Segment Group",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/segment-group"
  }
);

export type * as SegmentGroupStyles from "./types";
