// * https://ark-ui.com/docs/components/pin-input#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { pinInputStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "pin-input";
    part: "root";
    invalid: string;
    disabled: string;
    complete: string;
    readonly: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "pin-input";
    part: "label";
    invalid: string;
    disabled: string;
    complete: string;
    readonly: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "pin-input";
    part: "input";
    disabled: string;
    complete: string;
    index: number;
    invalid: string;
  };
}>;

export type Variants = VariantProps<typeof pinInputStyles>;
