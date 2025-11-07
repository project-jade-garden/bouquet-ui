import { sva } from "jade-garden/sva";

export const tagsInputStyles = sva(
  {
    name: "tags-input",
    slots: [
      "root",
      "label",
      "control",
      "input",
      "clearTrigger",
      "item",
      "itemPreview",
      "itemInput",
      "itemText",
      "itemDeleteTrigger"
    ],
    base: {
      root: "w-full v-stack-1.5",
      label: "text-default text-sm font-medium",
      control: [
        // Borders
        "rounded-sm",
        "border",
        "border-default",
        "focus-within:border-accented",

        // Effects
        "focus-within:[box-shadow:0_0_0_1px_var(--colors-color-palette-default)]",

        // Layout
        "flex",
        "outline-0",

        // Flexbox & Grid
        "items-center",
        "flex-wrap",

        // Transitions & Animation
        "transition-[border-color,_box-shadow]",
        "duration-200",
        "ease-in"
      ],
      input: "bg-transparent outline-none text-default",
      itemPreview: [
        // Borders
        "rounded-xs",
        "border",
        "border-default",
        "highlighted:border-accented",

        // Effects
        "highlighted:[box-shadow:0_0_0_1px_var(--colors-color-palette-default)]",

        // Layout
        "inline-flex",
        "hidden:hidden",

        // Flexbox & Grid
        "items-center",

        // Typography
        "text-default",
        "font-medium"
      ],
      itemInput: "bg-transparent outline-none text-default"
    }
  },
  {
    description: "A component that allows users to add tags to an input field.",
    name: "Tags Input",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/tags-input"
  }
);

export type * as TagsInputStyles from "./types";
