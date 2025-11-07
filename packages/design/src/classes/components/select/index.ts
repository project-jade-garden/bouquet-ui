import { sva } from "jade-garden/sva";

export const selectStyles = sva(
  {
    name: "select",
    slots: [
      "label",
      "positioner",
      "trigger",
      "indicator",
      "clearTrigger",
      "item",
      "itemText",
      "itemIndicator",
      "itemGroup",
      "itemGroupLabel",
      "list",
      "content",
      "root",
      "control",
      "valueText"
    ],
    base: {
      label: "text-default font-medium",
      positioner: [
        // Sizing
        "w-full",

        // Borders
        "rounded-sm",
        "border-default",

        // Interactivity
        "appearance-none",
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Layout
        "inline-flex",
        "relative",
        "outline-0",

        // Flexbox & Grid
        "items-center",
        "justify-between",

        // Typography
        "text-default",
        "icon:text-fg-subtle",
        "disabled:text-dimmed",
        "[&:is(:disabled,_[disabled],_[data-disabled])_:where(svg)]:text-dimmed",
        "placeholder-shown:text-fg-subtle",

        // Transitions & Animation
        "transition-[background,_box-shadow,_border-color]",
        "duration-200",
        "ease-in"
      ],
      item: [
        // Backgrounds
        "bg-[--colors-gray-a3]",

        // Borders
        "rounded-xs",

        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Layout
        "flex",

        // Flexbox & Grid
        "items-center",
        "justify-between",

        // Typography
        "highlighted:text-default",
        "disabled:text-dimmed",
        "selected:text-fg-subtle",

        // Transitions & Animation
        "transition-[background,_color]",
        "duration-150",
        "ease-in"
      ],
      itemIndicator: "text-default",
      itemGroupLabel: "text-sm font-semibold",
      content: [
        // Backgrounds
        "bg-default",

        // Borders
        "rounded-sm",
        "focus-visible:outline",
        "focus-visible:outline-2",
        "focus-visible:outline-border-outline",

        // Effects
        "shadow-lg",

        // Layout
        "flex",
        "hidden:hidden",
        "z-dropdown",

        // Flexbox & Grid
        "flex-col",

        // Transitions & Animation
        "open:animate-fade-in",
        "closed:animate-fade-out"
      ],
      root: "w-full v-stack-1.5"
    }
  },
  {
    description: "Displays a list of options for the user to pick from.",
    name: "Select",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/select"
  }
);

export type * as SelectStyles from "./types";
