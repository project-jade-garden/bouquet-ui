import { sva } from "jade-garden/sva";

export const stepsStyles = sva(
  {
    name: "steps",
    slots: [
      "root",
      "list",
      "item",
      "trigger",
      "indicator",
      "separator",
      "content",
      "nextTrigger",
      "prevTrigger",
      "progress"
    ],
    base: {}
  },
  {
    description: "Used to guide users through a series of steps in a process.",
    name: "Steps",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/steps"
  }
);

export type * as StepsStyles from "./types";
