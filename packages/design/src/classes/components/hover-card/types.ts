// * https://ark-ui.com/docs/components/hover-card#api-reference
import type { Traits } from "jade-garden";

export type TriggerTraits = Traits<{
  data: {
    scope: "hover-card";
    part: "trigger";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    state: "open" | "closed";
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "hover-card";
    part: "content";
    state: "open" | "closed";
    nested: "popover";
    "has-nested": "popover";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;
