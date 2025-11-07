import { sva } from "jade-garden/sva";

export const fieldsetStyles = sva(
  {
    name: "fieldset",
    slots: ["root", "errorText", "helperText", "legend"],
    base: {
      root: [
        // Sizing
        "w-full",

        // Borders
        "border-t",

        // Layout
        "grid",

        // Flexbox & Grid
        "gap-x-8",
        "gap-y-1.5",
        "grid-rows-[auto_1fr]",
        "grid-cols-[1fr_auto]",
        "[grid-template-areas:'legend_legend'_'helperText_helperText'_'control_control'_'errorText_errorText']",
        "md:[grid-template-areas:'legend_control'_'helperText_control'_'errorText_errorText']"
      ],
      errorText: [
        // Spacing
        "mt-4",

        // Borders
        "border-t",

        // Layout
        "inline-flex",

        // Flexbox & Grid
        "gap-2",
        "items-center",
        "[grid-area:errorText]",

        // Typography
        "text-sm",
        "text-fg-error",
        "disabled:text-dimmed"
      ],
      helperText: [
        // Flexbox & Grid
        "[grid-area:helperText]",

        // Typography
        "text-sm",
        "text-muted",
        "disabled:text-dimmed"
      ],
      legend: [
        // Layout
        "float-left",
        "clear-both",

        // Flexbox & Grid
        "[grid-area:legend]",

        // Typography
        "text-sm",
        "font-medium",
        "text-default",
        "disabled:text-dimmed"
      ]
    }
  },
  {
    description: "A component that groups a legend, helper, and error text, ensuring accessibility.",
    name: "Fieldset",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/fieldset"
  }
);
