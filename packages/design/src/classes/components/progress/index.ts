import { sva } from "jade-garden/sva";

export const progressStyles = sva(
  {
    name: "progress",
    slots: ["root", "label", "track", "range", "valueText", "view", "circle", "circleTrack", "circleRange"],
    base: {
      root: [
        // Sizing
        "w-full",

        // Layout
        "flex",

        // Flexbox & Grid
        "gap-1.5",
        "items-center",
        "flex-col"
      ],
      label: "text-sm font-medium",
      track: [
        // Sizing
        "w-full",

        // Backgrounds
        "bg-elevated",

        // Borders
        "rounded-sm",

        // Layout
        "overflow-hidden"
      ],
      range: "h-full [transition:width_.2s_ease-in-out]",
      valueText: "text-sm",
      circleTrack: "stroke-(--background-color-elevated)",
      circleRange: "transition-[stroke-dasharray,_stroke] duration-[600ms]"
    },
    variants: {
      color: {
        primary: {
          circleRange: "stroke-primary",
          label: "text-primary",
          range: "bg-primary"
        },
        secondary: {
          circleRange: "stroke-secondary",
          label: "text-secondary",
          range: "bg-secondary"
        },
        success: {
          circleRange: "stroke-success",
          label: "text-success",
          range: "bg-success"
        },
        info: {
          circleRange: "stroke-info",
          label: "text-info",
          range: "bg-info"
        },
        warning: {
          circleRange: "stroke-warning",
          label: "text-warning",
          range: "bg-warning"
        },
        error: {
          circleRange: "stroke-error",
          label: "text-error",
          range: "bg-error"
        },
        surface: {
          circleRange: "stroke-(--background-color-inverted)",
          label: "text-default",
          range: "bg-inverted"
        }
      },
      size: {
        sm: {
          circle: "[--size:36px] [--thickness:4px]",
          track: "h-1.5"
        },
        md: {
          track: "h-2",
          circle: "[--size:40px] [--thickness:4px]"
        },
        lg: {
          track: "h-2.5",
          circle: "[--size:44px] [--thickness:4px]"
        }
      }
    },
    defaultVariants: {
      color: "primary",
      size: "md"
    }
  },
  {
    description: "An element that shows either determinate or indeterminate progress.",
    name: "Progress",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/progress"
  }
);

export type * as ProgressStyles from "./types";
