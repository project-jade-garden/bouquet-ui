import { sva } from "jade-garden/sva";

export const paginationStyles = sva(
  {
    name: "pagination",
    slots: ["root", "item", "ellipsis", "prevTrigger", "nextTrigger"],
    base: {
      root: "h-stack-2.5",
      item: "tabular-nums",
      ellipsis: [
        // Spacing
        "px-2",

        // Layout
        "inline-flex",

        // Flexbox & Grid
        "items-center",

        // Typography
        "text-default",
        "font-semibold"
      ]
    }
  },
  {
    description: "A navigation component that allows users to browse through pages.",
    name: "Pagination",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/pagination"
  }
);
export type * as PaginationStyles from "./types";
