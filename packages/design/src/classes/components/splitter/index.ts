import { sva } from "jade-garden/sva";

export const splitterStyles = sva(
  {
    name: "splitter",
    slots: ["root", "panel", "resizeTrigger"],
    base: {
      root: "h-stack-2",
      panel: [
        // Backgrounds
        "bg-default",

        // Borders
        "rounded-sm",
        "border",

        // Flexbox & Grid
        "center",

        // Typography
        "text-muted"
      ],
      resizeTrigger: [
        // Spacing
        "horizontal:mx-0",
        "horizontal:my-[min(1rem,_20%)]",
        "vertical:mx-[min(1rem,_20%)]",
        "vertical:my-0",

        // Sizing
        "horizontal:min-w-1.5",
        "vertical:min-h-1.5",

        // Backgrounds
        "bg-[--colors-gray-7]",
        "active:bg-[--colors-gray-8]",

        // Borders
        "rounded-full",
        "outline-0",

        // Transitions & Animation
        "transition-[background]",
        "duration-200",
        "ease-in"
      ]
    }
  },
  {
    description: "A component that divides your interface into resizable sections.",
    name: "Splitter",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/splitter"
  }
);

export type * as SplitterStyles from "./types";
