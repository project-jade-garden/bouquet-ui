import { sva } from "jade-garden/sva";

export const passwordInputStyles = sva(
  {
    name: "password-input",
    slots: ["root", "input", "label", "control", "indicator", "visibilityTrigger"],
    base: {}
  },
  {
    description: "A component that allows users to enter secure text like (passwords and api keys).",
    name: "Password Input",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/password-input"
  }
);

export type * as PasswordInputStyles from "./types";
