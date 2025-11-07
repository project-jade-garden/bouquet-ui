import { sva } from "jade-garden/sva";

export const numberInputStyles = sva(
  {
    name: "number-input",
    slots: ["root", "label", "input", "control", "valueText", "incrementTrigger", "decrementTrigger", "scrubber"],
    base: {
      root: "v-stack-1.5",
      label: "text-default font-medium",
      input: [
        // Sizing
        "w-full",

        // Backgrounds
        "bg-transparent",

        // Borders
        "border-none",

        // Interactivity
        "disabled:cursor-not-allowed",

        // Layout
        "outline-none",

        // Flexbox & Grid
        "row-span-2"
      ],
      control: [
        // Borders
        "border",
        "rounded-sm",
        "border-default",
        "[&_>_:not([hidden])_~_:not([hidden])]:border-l",
        "[&_>_:not([hidden])_~_:not([hidden])]:border-r-0",
        "focus-within:border-accented",

        // Effects
        "disabled:opacity-40",
        "focus-within:[box-shadow:0_0_0_1px_var(--colors-color-palette-default]",

        // Interactivity
        "disabled:cursor-not-allowed",

        // Layout
        "grid",
        "overflow-hidden",

        // Flexbox & Grid
        "grid-cols-[1fr_32px]",
        "grid-rows-[1fr_1fr]",

        // Transitions & Animation
        "transition-[border-color,_box-shadow]",
        "duration-200",
        "ease-in"
      ],
      incrementTrigger: [
        // Sizing
        "icon:size-4",

        // Borders
        "border-default",

        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Layout
        "inline-flex",

        // Flexbox & Grid
        "center",

        // Typography
        "text-muted",
        "disabled:text-dimmed",

        // Transitions & Animation
        "transition-property:background,_border-color,_color,_box-shadow]",
        "duration-200",
        "ease-in"
      ],
      decrementTrigger: [
        // Sizing
        "icon:size-4",

        // Borders
        "border-t",
        "border-default",

        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Layout
        "inline-flex",

        // Flexbox & Grid
        "center",

        // Typography
        "text-muted",
        "disabled:text-dimmed",

        // Transitions & Animation
        "transition-property:background,_border-color,_color,_box-shadow]",
        "duration-200",
        "ease-in"
      ]
    },
    variants: {
      size: {
        md: {
          control: "ps-3 h-10 min-w-10 text-md",
          label: "text-sm"
        },
        lg: {
          control: "ps-3.5 h-11 min-w-11 text-md",
          label: "text-sm"
        },
        xl: {
          control: "ps-4 h-12 min-w-12 text-lg",
          label: "text-md"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "A field that allows user input of numeric values.",
    name: "Number Input",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/number-input"
  }
);

export type * as NumberInputStyles from "./types";
