// * https://ark-ui.com/docs/components/tooltip#api-reference
import type { Traits } from "jade-garden";

export type TriggerTraits = Traits<{
  data: {
    scope: "tooltip";
    part: "trigger";
    expanded: string;
    state: "open" | "closed";
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "tooltip";
    part: "content";
    state: "open" | "closed";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;
