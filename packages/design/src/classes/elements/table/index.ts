import { sva } from "jade-garden/sva";

export const tableStyles = sva(
  {
    name: "table",
    slots: ["root", "tbody", "td", "tfoot", "thead", "th", "tr", "caption"],
    base: {
      root: [
        // Sizing
        "w-full",

        // Typography
        "text-sm",

        // Tables
        "caption-bottom"
      ],
      tbody: "[&_tr:last-child]:border-b-0",
      caption: "mt-4 text-dimmed",
      td: "align-middle",
      tfoot: [
        // Borders
        "border-t",
        "[&_tr:last-child]:border-b-0",

        // Layouts
        "relative",

        // Typography
        "font-medium"
      ],
      th: [
        // Layouts
        "relative",

        // Typography
        "text-muted",
        "font-medium",
        "text-left",
        "align-middle"
      ],
      tr: [
        // Borders
        "border-b",

        // Transitions & Animation
        "transition-[background,_color]",
        "duration-200",
        "ease-in"
      ]
    },
    variants: {
      variant: {
        outline: {
          root: "border",
          thead: "bg-muted"
        },
        plain: {
          tr: "hover:bg-muted selected:bg-elevated"
        }
      },
      size: {
        sm: {
          td: "h-11 px-3",
          th: "h-11 px-3"
        },
        md: {
          td: "h-14 px-4",
          th: "h-11 px-4"
        }
      }
    },
    defaultVariants: {
      size: "md",
      variant: "plain"
    }
  },
  {
    description: "A responsive table element to display data in rows and columns.",
    name: "Table",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/table"
  }
);

export type * as TableStyles from "./types";
