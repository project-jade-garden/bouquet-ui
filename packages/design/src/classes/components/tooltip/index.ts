import { sva } from "jade-garden/sva";

export const tooltipStyles = sva(
  {
    name: "tooltip",
    slots: ["trigger", "arrow", "arrowTip", "positioner", "content"],
    base: {
      content: [
        // Spacing
        "px-3",
        "py-2",

        // Sizing
        "max-w-64",

        // Backgrounds
        "bg-gray-950",
        "dark:bg-gray-50",

        // Borders
        "rounded-sm",

        // Effects
        "shadow-sm",

        // Layout
        "z-tooltip",

        // Typography
        "text-default",
        "text-xs",
        "font-semibold",

        // Transitions & Animation
        "open:animate-fade-in",
        "closed:animate-fade-out"
      ]
    }
  },
  {
    description: "A label that provides information on hover or focus.",
    name: "Tooltip",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/tooltip"
  }
);

export type * as TooltipStyles from "./types";
