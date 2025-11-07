// * https://ark-ui.com/docs/components/toggle-group#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "toggle-group";
    part: "root";
    disabled: string;
    orientation: "horizontal" | "vertical";
    focus: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "toggle-group";
    part: "item";
    focus: string;
    disabled: string;
    orientation: "horizontal" | "vertical";
    state: "on" | "off";
  };
}>;
