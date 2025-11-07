import { sva } from "jade-garden/sva";

export const comboboxStyles = sva(
  {
    name: "combobox",
    slots: [
      "root",
      "clearTrigger",
      "content",
      "control",
      "input",
      "item",
      "itemGroup",
      "itemGroupLabel",
      "itemIndicator",
      "itemText",
      "label",
      "list",
      "positioner",
      "trigger",
      "empty"
    ],
    base: {
      root: "w-full h-stack-1.5",
      content: [
        // Backgrounds
        "bg-default",

        // Borders
        "rounded-sm",
        "focus-visible:outline-2",
        "focus-visible:outline-offset-2",

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
      control: "relative",
      item: [
        // Backgrounds
        "highlighted:bg-muted",

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
        "disabled:text-dimmed",

        // Transitions & Animation
        "transition-[background,_color]",
        "duration-200",
        "ease-in"
      ],
      itemGroupLabel: "text-sm font-semibold",
      itemIndicator: "text-default",
      label: "text-default font-medium",
      trigger: [
        // Interactivity
        "cursor-pointer",

        // Layout
        "absolute",
        "top-px",
        "right-0",

        // Typography
        "text-muted"
      ]
    },
    variants: {
      color: {
        primary: {
          content: "focus-visible:outline-primary"
        },
        secondary: {
          content: "focus-visible:outline-secondary"
        },
        tertiary: {
          content: "focus-visible:outline-tertiary"
        },
        success: {
          content: "focus-visible:outline-success"
        },
        info: {
          content: "focus-visible:outline-info"
        },
        warning: {
          content: "focus-visible:outline-warning"
        },
        error: {
          content: "focus-visible:outline-error"
        },
        surface: {
          content: "focus-visible:outline-surface"
        }
      },
      size: {
        sm: {
          content: "p-0.5 gap-1",
          item: "text-sm px-2 h-9",
          itemIndicator: "icon:size-4",
          itemGroupLabel: "px-2 py-1.5",
          label: "text-sm",
          trigger: "right-2.5"
        },
        md: {
          content: "p-1 gap-1",
          item: "text-md px-2 h-10",
          itemIndicator: "icon:size-4",
          itemGroupLabel: "px-2 py-1.5",
          label: "text-sm",
          trigger: "right-3"
        },
        lg: {
          content: "p-1.5 gap-1",
          item: "text-md px-2 h-11",
          itemIndicator: "icon:size-5",
          itemGroupLabel: "px-2 py-1.5",
          label: "text-sm",
          trigger: "right-3.5"
        }
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md"
    }
  },
  {
    description: "A single input field that combines the functionality of a select and input.",
    name: "Combobox",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/combobox"
  }
);

export type * as ComboboxStyles from "./types";
