import { sva } from "jade-garden/sva";

export const editableStyles = sva(
  {
    name: "editable",
    slots: ["root", "area", "label", "preview", "input", "editTrigger", "submitTrigger", "cancelTrigger", "control"],
    base: {
      root: "w-full v-stack-1.5",
      control: "h-stack-2"
    }
  },
  {
    description: "A component that allows users to edit text in place.",
    name: "Editable",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/editable"
  }
);

export type * as EditableStyles from "./types";
