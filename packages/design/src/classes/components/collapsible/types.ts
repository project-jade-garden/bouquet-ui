// * https://ark-ui.com/docs/components/collapsible#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "collapsible";
    part: "root";
    state: "open" | "closed";
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "collapsible";
    part: "trigger";
    state: "open" | "closed";
    disabled: string;
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "collapsible";
    part: "content";
    collapsible: string;
    state: "open" | "closed";
    disabled: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "collapsible";
    part: "indicator";
    state: "open" | "closed";
    disabled: string;
  };
}>;
