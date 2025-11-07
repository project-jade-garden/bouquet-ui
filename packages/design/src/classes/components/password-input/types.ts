// * https://ark-ui.com/docs/components/password-input#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "password-input";
    part: "root";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "password-input";
    part: "input";
    state: "visible" | "hidden";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "password-input";
    part: "label";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "password-input";
    part: "control";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "password-input";
    part: "indicator";
    state: "visible" | "hidden";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type VisibilityTriggerTraits = Traits<{
  data: {
    scope: "password-input";
    part: "visibility-trigger";
    readonly: string;
    disabled: string;
    state: "visible" | "hidden";
  };
}>;
