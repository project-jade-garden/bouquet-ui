// * https://ark-ui.com/docs/components/pagination#api-reference
import type { Traits } from "jade-garden";

export type ItemTraits = Traits<{
  data: {
    scope: "pagination";
    part: "item";
    index: number;
    selected: string;
  };
}>;

export type PrevTriggerTraits = Traits<{
  data: {
    scope: "pagination";
    part: "prev-trigger";
    disabled: string;
  };
}>;

export type NextTriggerTraits = Traits<{
  data: {
    scope: "pagination";
    part: "next-trigger";
    disabled: string;
  };
}>;
