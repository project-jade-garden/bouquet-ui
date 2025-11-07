import { sva } from "jade-garden/sva";

export const fieldStyles = sva(
  {
    name: "field",
    slots: ["root", "errorText", "helperText", "input", "label", "select", "textarea", "requiredIndicator"],
    base: {
      root: "v-stack-1.5",
      errorText: [
        // Layout
        "inline-flex",

        // Flexbox & Grid
        "gap-2",
        "items-center",

        // Typography
        "text-error",
        "disabled:text-dimmed",
        "text-sm"
      ],
      helperText: [
        // Typography
        "text-muted",
        "disabled:text-dimmed",
        "text-sm"
      ],
      label: [
        // Typography
        "text-default",
        "disabled:text-dimmed",
        "text-sm",
        "font-medium"
      ]
    }
  },
  {
    description: "A component that groups a label, input, helper, and error text, ensuring accessibility.",
    name: "Field",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/field"
  }
);
