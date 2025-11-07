import { sva } from "jade-garden/sva";

export const popoverStyles = sva(
  {
    name: "popover",
    slots: [
      "arrow",
      "arrowTip",
      "anchor",
      "trigger",
      "indicator",
      "positioner",
      "content",
      "title",
      "description",
      "closeTrigger"
    ],
    base: {
      arrow: "[--arrow-size:--spacing(3)] [--arrow-background:var(--colors-bg-default)]",
      arrowTip: "border-t border-l",
      positioner: "relative",
      content: [
        // Spacing
        "p-4",

        // Sizing
        "max-w-96",

        // Backgrounds
        "bg-default",

        // Borders
        "rounded-md",

        // Effects
        "shadow-lg",

        // Layout
        "flex",
        "z-popover",
        "hidden:hidden",

        // Flexbox & Grid
        "flex-col",

        // Transitions & Animation
        "open:animate-fade-in",
        "closed:animate-fade-out"
      ],
      title: "text-sm font-medium",
      description: "text-sm text-muted",
      closeTrigger: "text-muted"
    }
  },
  {
    description: "An overlay that displays additional information or options when triggered.",
    name: "Popover",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/popover"
  }
);

export type * as PopoverStyles from "./types";
