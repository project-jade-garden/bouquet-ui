// * https://ark-ui.com/docs/components/number-input#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { numberInputStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "number-input";
    part: "root";
    disabled: string;
    focus: string;
    invalid: string;
    scrubbing: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "number-input";
    part: "label";
    disabled: string;
    focus: string;
    invalid: string;
    scrubbing: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "number-input";
    part: "input";
    invalid: string;
    disabled: string;
    scrubbing: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "number-input";
    part: "control";
    focus: string;
    disabled: string;
    invalid: string;
    scrubbing: string;
  };
}>;

export type ValueTextTraits = Traits<{
  data: {
    scope: "number-input";
    part: "value-text";
    disabled: string;
    invalid: string;
    focus: string;
    scrubbing: string;
  };
}>;

export type IncrementTriggerTraits = Traits<{
  data: {
    scope: "number-input";
    part: "increment-trigger";
    disabled: string;
    scrubbing: string;
  };
}>;

export type DecrementTriggerTraits = Traits<{
  data: {
    scope: "number-input";
    part: "decrement-trigger";
    disabled: string;
    scrubbing: string;
  };
}>;

export type ScrubberTraits = Traits<{
  data: {
    scope: "number-input";
    part: "scrubber";
    disabled: string;
    scrubbing: string;
  };
}>;

export type Variants = VariantProps<typeof numberInputStyles>;
