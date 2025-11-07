// * https://ark-ui.com/docs/components/popover#api-reference
import type { Traits } from "jade-garden";

export type TriggerTraits = Traits<{
  data: {
    scope: "popover";
    part: "trigger";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    state: "open" | "closed";
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "popover";
    part: "indicator";
    state: "open" | "closed";
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "popover";
    part: "content";
    state: "open" | "closed";
    nested: "popover";
    "has-nested": "popover";
    expanded: string;
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;
