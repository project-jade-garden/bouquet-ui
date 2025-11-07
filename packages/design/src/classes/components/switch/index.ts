import { sva } from "jade-garden/sva";

export const switchStyles = sva(
  {
    name: "switch",
    slots: ["root", "label", "control", "thumb"],
    base: {
      root: "flex relative items-center",
      label: "text-default font-medium",
      control: [
        // Backgrounds
        "bg-bg-emphasized",
        "checked:bg-elevated",

        // Borders
        "rounded-full",

        // Interactivity
        "cursor-pointer",

        // Layout
        "inline-flex",

        // Flexbox & Grid
        "items-center",
        "shrink-0",

        // Transitions & Animation
        "transition-[background]",
        "duration-200",
        "ease-in"
      ],
      thumb: [
        // Backgrounds
        "bg-default",
        "checked:bg-default",
        "dark:checked:bg-[--colors-color-palette-fg]",

        // Borders
        "rounded-full",

        // Effects
        "shadow-xs",

        // Transforms
        "checked:translate-x-full",

        // Transitions & Animation
        "transition-[background,_transform]",
        "duration-200",
        "ease-in"
      ]
    }
  },
  {
    description: "A control element that allows for a binary selection.",
    name: "Switch",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/switch"
  }
);

export type * as SwitchStyles from "./types";
