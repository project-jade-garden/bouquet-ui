import { sva } from "jade-garden/sva";

export const tourStyles = sva(
  {
    name: "tour",
    slots: [
      "content",
      "actionTrigger",
      "closeTrigger",
      "progressText",
      "title",
      "description",
      "positioner",
      "arrow",
      "arrowTip",
      "backdrop",
      "spotlight",
      "control"
    ],
    base: {
      arrow: "[--arrow-size:--spacing(3)] [--arrow-background:var(--hover-card-background)]",
      arrowTip: "border-t border-l",
      backdrop: "z-overlay backdrop-blur-xs",
      closeTrigger: "absolute right-3 top-3",
      content: [
        // Spacing
        "p-5",

        // Sizing
        "max-w-sm",

        // Backgrounds
        "bg-default",

        // Borders
        "rounded-md",

        // Effects
        "shadow-lg",

        // Layout
        "relative",
        "flex",

        // Flexbox & Grid
        "flex-col"
      ],
      control: "flex gap-3 justify-end",
      description: "text-sm text-muted",
      positioner: []
    }
  },
  {
    description: "A guided tour that helps users understand the interface.",
    name: "Tour",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/tour"
  }
);

export type * as TourStyles from "./types";
