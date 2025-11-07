import { sva } from "jade-garden/sva";

export const collapsibleStyles = sva(
  {
    name: "collapsible",
    slots: ["root", "trigger", "content", "indicator"],
    base: {
      root: "w-full flex items-start flex-col",
      content: [
        // Sizing
        "w-full",

        // Layout
        "overflow-hidden",

        // Transitions & Animation
        "open:animate-collapse-in",
        "closed:animate-collapse-out"
      ]
    }
  },
  {
    description: "A collapsible element to toggle visibility of its content.",
    name: "Collapsible",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/collapsible"
  }
);

export type * as CollapsibleStyles from "./types";
