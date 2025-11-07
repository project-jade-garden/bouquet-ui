// * https://ark-ui.com/docs/components/rating-group#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { ratingGroupStyles } from ".";

export type LabelTraits = Traits<{
  data: {
    scope: "rating-group";
    part: "label";
    disabled: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "rating-group";
    part: "item";
    disabled: string;
    readonly: string;
    checked: string;
    highlighted: string;
    half: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "rating-group";
    part: "control";
    readonly: string;
    disabled: string;
  };
}>;

export type Variants = VariantProps<typeof ratingGroupStyles>;
