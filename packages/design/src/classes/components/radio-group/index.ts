import { sva } from "jade-garden/sva";

export const radioGroupStyles = sva(
  {
    name: "radio-group",
    slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
    base: {
      root: [
        // Layout
        "flex",

        // Flexbox & Grid
        "horizontal:flex-row",
        "vertical:flex-col"
      ],
      item: [
        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Layout
        "flex",

        // Flexbox & Grid
        "items-center"
      ],
      itemText: [
        // Typography
        "text-default",
        "disabled:text-dimmed",
        "font-medium"
      ],
      itemControl: [
        // Backgrounds
        "bg-transparent",
        "checked:bg-elevated",

        // Borders
        "rounded-full",
        "border",
        "border-default",
        "disabled:border-border-muted",
        "checked:border-accented",

        // Layout
        "outline",
        "outline-bg-default",

        // Typography
        "disabled:text-dimmed",

        // Transitions & Animation
        "transition-[background]",
        "duration-200",
        "ease-in"
      ]
    },

    variants: {
      size: {
        sm: {
          root: [
            // Flexbox & Grid
            "horizontal:gap-4",
            "vertical:gap-3"
          ],
          item: "gap-2",
          itemControl: [
            // Sizing
            "size-4",

            // Layout
            "checked:outline-3",
            "checked:-outline-offset-4"
          ],
          itemText: "text-sm"
        },
        md: {
          root: [
            // Flexbox & Grid
            "horizontal:gap-6",
            "vertical:gap-4"
          ],
          item: "gap-3",
          itemControl: [
            // Sizing
            "size-5",

            // Layout
            "checked:outline-4",
            "checked:-outline-offset-5"
          ],
          itemText: "text-md"
        },
        lg: {
          root: [
            // Flexbox & Grid
            "horizontal:gap-8",
            "vertical:gap-5"
          ],
          item: "gap-4",
          itemControl: [
            // Sizing
            "size-6",

            // Layout
            "checked:outline-5",
            "checked:-outline-offset-6"
          ],
          itemText: "text-lg"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "Allows single selection from multiple options.",
    name: "Radio Group",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/radio-group"
  }
);

export type * as RadioGroupStyles from "./types";
