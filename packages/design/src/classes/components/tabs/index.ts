import { sva } from "jade-garden/sva";

export const tabsStyles = sva(
  {
    name: "tabs",
    slots: ["root", "list", "trigger", "content", "indicator"],
    base: {
      root: [
        // Sizing
        "w-full",

        // Layout
        "flex",

        // Flexbox & Grid
        "horizontal:flex-col",
        "vertical:flex-row"
      ],
      list: [
        // Layout
        "flex",
        "overflow-auto",
        "relative",
        "scrollbar:hidden",

        // Flexbox & Grid
        "shrink-0",
        "horizontal:flex-row",
        "vertical:flex-col",

        // Custom Modifier
        "[scrollbar-width:none]"
      ],
      trigger: [
        // Interactivity
        "cursor-pointer",
        "disabled:cursor-not-allowed",

        // Layout
        "inline-flex",
        "z-1",

        // Flexbox & Grid
        "gap-2",
        "center",
        "vertical:justify-start",
        "shrink-0",

        // Typography
        "text-muted",
        "disabled:text-dimmed",
        "selected:text-default",
        "font-semibold",
        "whitespace-nowrap",

        // Transitions & Animation
        "transition-[color,_background,_border-color]",
        "duration-200",
        "ease-in"
      ]
    },
    variants: {
      size: {
        sm: {
          trigger: "icon:size-4"
        },
        md: {
          trigger: "icon:size-5"
        },
        lg: {
          trigger: "icon:size-6"
        }
      },
      variant: {
        enclosed: {
          list: [
            // Spacing
            "px-1",
            "vertical:py-1",

            // Sizing
            "vertical:h-fit!",

            // Backgrounds
            "bg-accented",

            // Borders
            "rounded-md",
            "border",

            // Flexbox & Grid
            "horizontal:items-center"
          ],
          indicator: [
            // Sizing
            "h-(--height)",
            "w-(--width)",

            // Backgrounds
            "bg-muted",

            // Borders
            "rounded-sm",

            // Effects
            "shadow-xs"
          ]
        },
        line: {
          list: [
            // Effects
            "horizontal:shadow-[0_-1px_0_0_inset_var(--border-color-default)]",
            "vertical:shadow-[1px_0_0_0_inset_var(--border-color-default)]",

            // Flexbox & Grid
            "horizontal:gap-2",
            "vertical:gap-1"
          ],
          indicator: [
            // Sizing
            "horizontal:h-[2px]",
            "horizontal:w-(--width)",
            "vertical:h-(--height)",
            "vertical:w-[2px]",

            // Backgrounds
            "bg-default",

            // Layout
            "horizontal:bottom-0",
            "vertical:left-0"
          ],
          content: "pt-4",
          trigger: "horizontal:pb-2.5"
        },
        outline: {
          list: "horizontal:-mb-px vertical:-mr-px",
          trigger: [
            // Backgrounds
            "selected:bg-default",

            // Borders
            "border",
            "border-transparent",
            "horizontal:rounded-t-sm",
            "vertical:rounded-l-sm",
            "selected:border-default",
            "selected:horizontal:border-b-transparent",
            "selected:vertical:border-r-transparent"
          ],
          content: [
            // Sizing
            "w-full",

            // Backgrounds
            "bg-default",

            // Borders
            "border",
            "border-default"
          ]
        }
      }
    },
    compoundVariants: [
      {
        size: "sm",
        variant: "enclosed",
        class: {
          list: "h-10",
          trigger: [
            // Spacing
            "px-3",

            // Sizing
            "h-8",
            "min-w-8",

            // Typography
            "text-sm"
          ],
          content: "p-3.5"
        }
      },
      {
        size: "md",
        variant: "enclosed",
        class: {
          list: "h-11",
          trigger: [
            // Spacing
            "px-3.5",

            // Sizing
            "h-9",
            "min-w-9",

            // Typography
            "text-sm"
          ],
          content: "p-4"
        }
      },
      {
        size: "lg",
        variant: "enclosed",
        class: {
          list: "h-12",
          trigger: [
            // Spacing
            "px-4",

            // Sizing
            "h-10",
            "min-w-10",

            // Typography
            "text-sm"
          ],
          content: "p-4.5"
        }
      },
      {
        size: "sm",
        variant: "outline",
        class: {
          trigger: [
            // Spacing
            "px-3.5",

            // Sizing
            "h-9",
            "min-w-9",

            // Typography
            "text-sm"
          ],
          content: "p-3.5"
        }
      },
      {
        size: "md",
        variant: "outline",
        class: {
          trigger: [
            // Spacing
            "px-4",

            // Sizing
            "h-10",
            "min-w-10",

            // Typography
            "text-sm"
          ],
          content: "p-4"
        }
      },
      {
        size: "lg",
        variant: "outline",
        class: {
          trigger: [
            // Spacing
            "px-4.5",

            // Sizing
            "h-11",
            "min-w-11",

            // Typography
            "text-md"
          ],
          content: "p-4.5"
        }
      },
      {
        size: "sm",
        variant: "line",
        class: {
          trigger: [
            // Spacing
            "px-2.5",

            // Sizing
            "h-9",
            "min-w-9",

            // Typography
            "text-sm"
          ],
          content: "pt-3"
        }
      },
      {
        size: "md",
        variant: "line",
        class: {
          trigger: [
            // Spacing
            "px-3",

            // Sizing
            "h-10",
            "min-w-10",

            // Typography
            "text-md"
          ],
          content: "pt-4"
        }
      },
      {
        size: "lg",
        variant: "line",
        class: {
          trigger: [
            // Spacing
            "px-3.5",

            // Sizing
            "h-11",
            "min-w-11",

            // Typography
            "text-md"
          ],
          content: "pt-5"
        }
      }
    ],
    defaultVariants: {
      size: "md",
      variant: "line"
    }
  },
  {
    description: "Flexible navigation tool with various modes and features.",
    name: "Tabs",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/tabs"
  }
);

export type * as TabsStyles from "./types";
