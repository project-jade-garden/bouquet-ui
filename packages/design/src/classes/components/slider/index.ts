import { sva } from "jade-garden/sva";

export const sliderStyles = sva(
  {
    name: "slider",
    slots: [
      "root",
      "label",
      "thumb",
      "valueText",
      "track",
      "range",
      "control",
      "markerGroup",
      "marker",
      "draggingIndicator"
    ],
    base: {
      root: "w-full v-stack-1",
      label: "text-default font-medium",
      thumb: [
        // Backgrounds
        "bg-default",

        // Borders
        "rounded-full",
        "border-2",
        "border-accented",

        // Effects
        "shadow-sm",

        // Layout
        "outline-none",
        "z-1"
      ],
      track: "bg-bg-emphasized rounded-full overflow-hidden flex-1",
      range: "bg-elevated",
      control: "flex relative items-center",
      markerGroup: "-mt-1",
      marker: [
        // Background
        "before:bg-white",
        "under-value:before:bg-white",
        "dark:under-value:before:bg-[--colors-color-palette-fg]",

        // Borders
        "before:rounded-full",

        // Layout
        "block",
        "relative",
        "left-1/2",

        // Transforms
        "-translate-x-1/2",

        // Typography
        "text-muted",
        "before:content-['']"
      ]
    }
  },
  {
    description: "A control element that allows for a range of selections.",
    name: "Slider",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/slider"
  }
);

export type * as SliderStyles from "./types";
