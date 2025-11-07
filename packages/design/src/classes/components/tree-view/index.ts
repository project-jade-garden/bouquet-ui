import { sva } from "jade-garden/sva";

export const treeViewStyles = sva(
  {
    name: "tree-view",
    slots: [
      "branch",
      "branchContent",
      "branchControl",
      "branchIndentGuide",
      "branchIndicator",
      "branchText",
      "branchTrigger",
      "item",
      "itemIndicator",
      "itemText",
      "label",
      "nodeCheckbox",
      "nodeRenameInput",
      "root",
      "tree"
    ],
    base: {
      root: "w-full",
      tree: "v-stack-3",
      item: [
        // Spacing
        "pl-[calc(((var(--depth)_-_1)_*_22px)_+_22px)]",
        "data-[depth=1]:pl-6",
        "py-1.5",

        // Sizing
        "selected:before:w-0.5",
        "selected:before:h-full",

        // Backgrounds
        "selected:before:bg-accent-default",
        "selected:bg-[--colors-color-palette-a2]",
        "selected:data-[depth=1]:before:bg-transparent",

        // Borders
        "rounded-l2",

        // Interactivity
        "cursor-pointer",

        // Layout
        "relative",
        "selected:before:absolute",
        "selected:before:left-3",
        "selected:before:top-0",
        "selected:before:z-1",

        // Typography
        "selected:before:content-['']",
        "text-fg-muted",
        "data-[depth=1]:text-fg-default",
        "selected:text-[--colors-color-palette-text]",
        "text-sm",
        "font-medium",
        "data-[depth=1]:font-semibold",

        // Transitions & Animation
        "transition-[background,_color]",
        "duration-200",
        "ease-[--easings-default]"
      ],
      branch: [
        // Sizing
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:h-full",
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:w-px",

        // Backgrounds
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:bg-border-default",

        // Layout
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:absolute",
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:left-3",
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:z-1",

        // Typography
        "[&[data-depth=1]_>_[data-part=branch-content]:before]:content-['']"
      ],
      branchControl: [
        // Spacing
        "px-[calc((var(--depth)_-_1)_*_22px)]",
        "data-[depth=1]:pl-1",
        "py-1.5",

        // Borders
        "rounded-l2",

        // Flexbox & Grid
        "h-stack-1.5",
        "items-center",

        // Typography
        "text-fg-muted",
        "[&[data-depth=1]_>_[data-part=branch-text]]:text-fg-default",
        "text-sm",
        "font-medium",
        "[&[data-depth=1]_>_[data-part=branch-text]]:font-semibold",

        // Transitions & Animation
        "transition-[background,_color]",
        "duration-200",
        "ease-[--easings-default]"
      ],
      branchContent: "relative",
      branchIndicator: [
        // Sizing
        "icon:size-4",

        // Typography
        "text-[--colors-color-palette-default]",
        "icon:text-base",

        // Transforms
        "origin-center",
        "open:rotate-90",

        // Transitions & Animation
        "transition-[transform]",
        "duration-200",
        "ease-[--easings-default]"
      ]
    }
  },
  {
    description: "A component that is used to show a tree hierarchy.",
    name: "Tree View",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/tree-view"
  }
);

export type * as TreeViewStyles from "./types";
