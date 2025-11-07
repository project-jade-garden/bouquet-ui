import { sva } from "jade-garden/sva";

export const toastStyles = sva(
  {
    name: "toast",
    slots: ["group", "root", "title", "description", "actionTrigger", "closeTrigger"],
    base: {
      root: [
        // Spacing
        "p-4",

        // Sizing
        "min-w-80",

        // Backgrounds
        "bg-default",

        // Borders
        "rounded-md",

        // Effects
        "shadow-lg",

        // Interactivity
        "will-change-[translate,_opacity,_scale]",

        // Layout
        "relative",

        // Typography
        "[overflow-wrap:anywhere]",

        // Transitions & Animation
        "transition-[translate,_scale,_opacity,_height]",
        "duration-300",
        "ease-in"
      ],
      title: "text-default text-sm font-semibold",
      description: "text-muted text-sm",
      actionTrigger: "mt-2",
      closeTrigger: "absolute top-3 right-3"
    }
  },
  {
    description: "A message that appears on the screen to provide feedback on an action.",
    name: "Toast",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/toast"
  }
);

export type * as ToastStyles from "./types";
