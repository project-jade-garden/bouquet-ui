// * https://ark-ui.com/docs/components/dialog#api-reference
import type { Traits } from "jade-garden";

export type TriggerTraits = Traits<{
  data: {
    scope: "dialog";
    part: "trigger";
    state: "open" | "closed";
  };
}>;

export type BackdropTraits = Traits<{
  data: {
    scope: "dialog";
    part: "backdrop";
    state: "open" | "closed";
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "dialog";
    part: "content";
    state: "open" | "closed";
    nested: "dialog";
    "has-nested": "dialog";
  };
}>;
