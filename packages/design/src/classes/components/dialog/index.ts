import { sva } from "jade-garden/sva";

export const dialogStyles = sva(
  {
    name: "dialog",
    slots: ["trigger", "backdrop", "positioner", "content", "title", "description", "closeTrigger"],
    base: {
      backdrop: [
        // Sizing
        "h-screen",
        "w-screen",

        // Backgrounds
        "bg-elevated/75",

        // Layout
        "fixed",
        "left-0",
        "top-0",
        "z-overlay",

        // Transitions & Animation
        "open:animate-backdrop-in",
        "closed:animate-backdrop-out"
      ],
      positioner: [
        // Sizing
        "h-dvh",
        "w-screen",

        // Layout
        "overflow-auto",
        "fixed",
        "left-0",
        "top-0",
        "z-modal",

        // Flexbox & Grid
        "center"
      ],
      content: [
        // Sizing
        "min-w-sm",

        // Backgrounds
        "bg-default",

        // Borders
        "rounded-lg",

        // Effects
        "shadow-lg",

        // Layout
        "relative",

        // Transitions & Animation
        "open:animate-dialog-in",
        "closed:animate-dialog-out"
      ],
      title: "text-lg font-semibold",
      description: "text-muted text-sm"
    }
  },
  {
    description: "A modal window that appears on top of the main content.",
    name: "Dialog",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/dialog"
  }
);

export type * as DialogStyles from "./types";
