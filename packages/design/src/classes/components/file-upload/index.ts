import { sva } from "jade-garden/sva";

export const fileUploadStyles = sva(
  {
    name: "file-upload",
    slots: [
      "root",
      "dropzone",
      "item",
      "itemDeleteTrigger",
      "itemGroup",
      "itemName",
      "itemPreview",
      "itemPreviewImage",
      "itemSizeText",
      "label",
      "trigger",
      "clearTrigger"
    ],
    base: {
      root: "w-full v-stack-4",
      dropzone: [
        // Spacing
        "px-6",
        "py-4",

        // Sizing
        "min-h-80",

        // Backgrounds
        "bg-default",

        // Borders
        "border",
        "rounded-md",

        // Flexbox & Grid
        "center",
        "v-stack-3"
      ],
      item: [
        // Spacing
        "p-4",

        // Backgrounds
        "bg-default",

        // Borders
        "border",
        "rounded-md",

        // Layout
        "grid",

        // Flexbox & Grid
        "gap-x-3",
        "grid-cols-[auto_1fr_auto]",
        "[grid-template-areas:'preview_name_delete'_'preview_size_delete']",

        // Transitions & Animation
        "animate-fade-in"
      ],
      itemDeleteTrigger: "[grid-area:delete] self-start",
      itemGroup: "v-stack-3",
      itemName: "[grid-area:name] text-default text-sm font-medium",
      itemPreview: "[grid-area:preview]",
      itemPreviewImage: "size-10 aspect-square object-scale-down",
      itemSizeText: "[grid-area:size] text-muted text-sm",
      label: "text-sm font-medium"
    }
  },
  {
    description: "A component that allows users to upload files.",
    name: "File Upload",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/file-upload"
  }
);

export type * as FileUploadStyles from "./types";
