import { sva } from "jade-garden/sva";

export const menuStyles = sva(
  {
    name: "menu",
    slots: [
      "arrow",
      "arrowTip",
      "content",
      "contextTrigger",
      "indicator",
      "item",
      "itemGroup",
      "itemGroupLabel",
      "itemIndicator",
      "itemText",
      "positioner",
      "separator",
      "trigger",
      "triggerItem"
    ],
    base: {
      content: [
        // Sizing
        "w-[calc(100% + 2rem]",

        // Backgrounds
        "bg-default",

        // Borders
        "rounded-md",
        "ring",
        "ring-default",

        // Effects
        "shadow-lg",

        // Layout
        "flex",
        "hidden:hidden",
        "outline-none",
        "z-dropdown",

        // Flexbox & Grid
        "flex-col",

        // Transitions & Animation
        "open:animate-fade-in",
        "closed:animate-fade-out"
      ],
      itemGroup: "v-stack-1",
      itemGroupLabel: "text-sm font-semibold",
      positioner: "z-dropdown",
      separator: "h-px border-default"
    },
    variants: {
      size: {
        xs: {
          itemGroupLabel: "py-1.5 px-1.5 mx-1",
          content: "py-1 gap-1",
          item: "h-8 px-1.5 mx-1 icon:size-4",
          optionItem: "h-8 px-1.5 mx-1 icon:size-4",
          triggerItem: "h-8 px-1.5 mx-1 icon:size-4"
        },
        sm: {
          itemGroupLabel: "py-2 px-2 mx-1",
          content: "py-1 gap-1",
          item: "h-9 px-2 mx-1 icon:size-4",
          optionItem: "h-9 px-2 mx-1 icon:size-4",
          triggerItem: "h-9 px-2 mx-1.5 icon:size-4"
        },
        md: {
          itemGroupLabel: "py-2.5 px-2.5 mx-1",
          content: "py-1 gap-1",
          item: "h-10 px-2.5 mx-1 icon:size-4",
          optionItem: "h-10 px-2.5 mx-1 icon:size-4",
          triggerItem: "h-10 px-2.5 mx-1.5 icon:size-4"
        },
        lg: {
          itemGroupLabel: "py-2.5 px-2.5 mx-1",
          content: "py-1 gap-1",
          item: "h-11 px-2.5 mx-1 icon:size-5",
          optionItem: "h-11 px-2.5 mx-1 icon:size-5",
          triggerItem: "h-11 px-2.5 mx-1.5 icon:size-5"
        }
      }
    },
    compoundSlots: [
      {
        slots: ["item", "triggerItem"],
        className: [
          // Backgrounds
          "highlighted:bg-elevated",

          // Borders
          "rounded-md",

          // Interactivity
          "cursor-pointer",
          "disabled:cursor-not-allowed",

          // Layout
          "flex",

          // Flexbox & Grid
          "items-center",

          // Typography
          "text-sm",
          "icon:text-muted",
          "highlighted:icon:text-default",
          "disabled:text-dimmed",
          "font-medium",

          // Transitions & Animation
          "transition-[background,_color]",
          "duration-150",
          "ease-in"
        ]
      }
    ],
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "A list of options that appears when a user interacts with a button.",
    name: "Menu",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/menu"
  }
);

export type * as MenuStyles from "./types";
