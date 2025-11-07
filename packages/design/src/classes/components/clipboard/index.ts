import { sva } from "jade-garden/sva";

export const clipboardStyles = sva(
  {
    name: "clipboard",
    slots: ["root", "control", "trigger", "indicator", "input", "label"],
    base: {
      root: "v-stack-1.5",
      control: "h-stack-3"
    }
  },
  {
    description: "A simple component to copy text to the clipboard.",
    name: "Clipboard",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/clipboard"
  }
);

export type * as ClipboardStyles from "./types";
