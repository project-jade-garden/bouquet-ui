import { sva } from "jade-garden/sva";

export const toggleGroupStyles = sva(
  {
    name: "toggle-group",
    slots: ["root", "item"],
    base: {
      root: [
        // Layout
        "flex",
        "overflow-hidden",
        "relative",

        // Flexbox & Grid
        "vertical:flex-col"
      ],
      item: [
        // Sizing
        "min-w-0",

        // Backgrounds
        "[&:is([data-state=on])]:bg-[--colors-gray-a3]",

        // Borders
        "disabled:border-border-muted",

        // Interactivity
        "appearance-none",
        "cursor-pointer",
        "select-none",
        "disabled:cursor-not-allowed",

        // Layout
        "inline-flex",
        "relative",
        "outline-none",

        // Flexbox & Grid
        "center",

        // Typography
        "text-fg-subtle",
        "[&:is([data-state=on])]:text-default",
        "disabled:text-dimmed",
        "font-semibold",
        "align-middle",
        "whitespace-nowrap",

        // Transitions & Animation
        "transition-[background,_box-shadow,_border-color,_color]",
        "duration-200",
        "ease-in"
      ]
    }
  },
  {
    description: "A set of two-state buttons that can be toggled on or off.",
    name: "Toggle Group",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/toggle-group"
  }
);

export type * as ToggleGroupStyles from "./types";
