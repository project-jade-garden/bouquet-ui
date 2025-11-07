// * https://ark-ui.com/docs/components/progress#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { progressStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "progress";
    part: "root";
    max: string;
    value: string;
    state: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "progress";
    part: "label";
    orientation: "horizontal" | "vertical";
  };
}>;

export type RangeTraits = Traits<{
  data: {
    scope: "progress";
    part: "range";
    orientation: "horizontal" | "vertical";
    state: string;
  };
}>;

export type ViewTraits = Traits<{
  data: {
    scope: "progress";
    part: "view";
    state: string;
  };
}>;

export type CircleTrackTraits = Traits<{
  data: {
    scope: "progress";
    part: "circle-track";
    orientation: "horizontal" | "vertical";
  };
}>;

export type CircleRangeTraits = Traits<{
  data: {
    scope: "progress";
    part: "circle-range";
    state: string;
  };
}>;

export type Variants = VariantProps<typeof progressStyles>;
