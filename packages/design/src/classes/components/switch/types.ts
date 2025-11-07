// * https://ark-ui.com/docs/components/switch#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "checked" | "unchecked";
    invalid: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "checked" | "unchecked";
    invalid: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "checked" | "unchecked";
    invalid: string;
  };
}>;

export type ThumbTraits = Traits<{
  data: {
    active: string;
    focus: string;
    "focus-visible": string;
    readonly: string;
    hover: string;
    disabled: string;
    state: "checked" | "unchecked";
    invalid: string;
  };
}>;
