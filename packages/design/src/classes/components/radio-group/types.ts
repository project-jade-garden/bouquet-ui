// * https://ark-ui.com/docs/components/radio-group#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { radioGroupStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "radio-group";
    part: "root";
    orientation: "horizontal" | "vertical";
    disabled: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "radio-group";
    part: "label";
    orientation: "horizontal" | "vertical";
    disabled: string;
  };
}>;

export type ItemControlTraits = Traits<{
  data: {
    scope: "radio-group";
    part: "item-control";
    active: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "radio-group";
    part: "indicator";
    disabled: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type Variants = VariantProps<typeof radioGroupStyles>;
