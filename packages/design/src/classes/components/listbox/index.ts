import { sva } from "jade-garden/sva";

export const listboxStyles = sva(
  {
    name: "listbox",
    slots: [
      "label",
      "input",
      "item",
      "itemText",
      "itemIndicator",
      "itemGroup",
      "itemGroupLabel",
      "content",
      "root",
      "valueText",
      "empty"
    ],
    base: {}
  },
  {
    description: "A component for selecting a single or multiple items from a list.",
    name: "Listbox",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/listbox"
  }
);

export type * as ListboxStyles from "./types";
