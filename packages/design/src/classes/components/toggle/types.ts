// * https://ark-ui.com/docs/components/toggle#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "toggle";
    part: "root";
    state: "on" | "off";
    pressed: string;
    disabled: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "toggle";
    part: "indicator";
    disabled: string;
    pressed: string;
    state: "on" | "off";
  };
}>;
