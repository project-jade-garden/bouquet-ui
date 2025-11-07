import { sva } from "jade-garden/sva";

export const pinInputStyles = sva(
  {
    name: "pin-input",
    slots: ["root", "label", "input", "control"],
    base: {
      root: "v-stack-1.5",
      label: "text-default font-medium",
      input: "px-0 text-center",
      control: "h-stack-2"
    },
    variants: {
      size: {
        xs: {
          label: "text-sm",
          input: "w-8"
        },
        sm: {
          label: "text-sm",
          input: "w-9"
        },
        md: {
          label: "text-sm",
          input: "w-10"
        },
        lg: {
          label: "text-sm",
          input: "w-11"
        },
        xl: {
          label: "text-md",
          input: "w-12"
        },
        "2xl": {
          label: "text-md",
          input: "w-16"
        }
      }
    },
    defaultVariants: {
      size: "md"
    }
  },
  {
    description: "For pin or verification codes with auto-focus transfer and masking options.",
    name: "Pin Input",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/pin-input"
  }
);

export type * as PinInputStyles from "./types";
