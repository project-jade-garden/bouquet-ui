import { sva } from "jade-garden/sva";

export const signaturePadStyles = sva(
  {
    name: "signature-pad",
    slots: ["root", "control", "segment", "segmentPath", "guide", "clearTrigger", "label"],
    base: {
      root: "w-full v-stack-1.5",
      control: [
        // Sizing
        "min-h-52",
        "min-w-0",

        // Backgrounds
        "bg-muted",

        // Borders
        "rounded-sm",
        "border",

        // Layout
        "relative"
      ],
      segment: "fill-fg-default",
      guide: [
        // Borders
        "border-b",
        "border-[--colors-gray-8]",
        "border-dashed",

        // Layout
        "absolute",
        "bottom-6",
        "left-6",
        "right-6"
      ],
      clearTrigger: "absolute top-3 right-3",
      label: "text-sm text-default font-medium"
    }
  },
  {
    description: "A component that allows users to draw a signature using a signature pad.",
    name: "Signature Pad",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/signature-pad"
  }
);

export type * as SignaturePadStyles from "./types";
