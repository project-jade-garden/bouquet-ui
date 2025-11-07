// * https://ark-ui.com/docs/components/segment-group#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { segmentGroupStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "segment-group";
    part: "root";
    orientation: "horizontal" | "vertical";
    disabled: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "segment-group";
    part: "label";
    orientation: "horizontal" | "vertical";
    disabled: string;
  };
}>;

export type ItemControlTraits = Traits<{
  data: {
    scope: "segment-group";
    part: "item-control";
    active: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "segment-group";
    part: "indicator";
    orientation: "horizontal" | "vertical";
    disabled: string;
  };
}>;

export type Variants = VariantProps<typeof segmentGroupStyles>;
