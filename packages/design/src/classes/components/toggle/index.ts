import { sva } from "jade-garden/sva";

export const toggleStyles = sva(
  {
    name: "toggle",
    slots: ["root", "indicator"],
    base: {
      indicator: "contents"
    }
  },
  {
    description: "A two-state button that can be toggled on or off.",
    name: "Toggle",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/toggle"
  }
);

export type * as ToggleStyles from "./types";
