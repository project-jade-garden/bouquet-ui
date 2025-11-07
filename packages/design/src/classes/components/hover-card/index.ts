import { sva } from "jade-garden/sva";

export const hoverCardStyles = sva(
  {
    name: "hover-card",
    slots: ["arrow", "arrowTip", "trigger", "positioner", "content"],
    base: {
      arrow: "[--arrow-size:12px] [--arrow-background:var(--hover-card-background)]",
      arrowTip: "border-t border-l",
      content: [
        // Spacing
        "p-4",

        // Sizing
        "max-w-80",

        // Backgrounds
        "[--hover-card-background:var(--bou-bg)]",
        "bg-default",

        // Borders
        "rounded-md",

        // Effects
        "shadow-lg",

        // Layout
        "relative",

        // Transitions & Animation
        "open:animate-fade-in",
        "closed:animate-[fadeOut_.25s_ease-out]"
      ]
    }
  },
  {
    description: "A card that appears when a user hovers over an element.",
    name: "Hover Card",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/hover-card"
  }
);

export type * as HoverCardStyles from "./types";
