// * https://ark-ui.com/docs/components/steps#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "steps";
    part: "root";
    orientation: "horizontal" | "vertical";
  };
}>;

export type ListTraits = Traits<{
  data: {
    scope: "steps";
    part: "list";
    orientation: "horizontal" | "vertical";
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "steps";
    part: "item";
    orientation: "horizontal" | "vertical";
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "steps";
    part: "trigger";
    state: "open" | "closed";
    orientation: "horizontal" | "vertical";
    complete: string;
    current: string;
    incomplete: string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "steps";
    part: "indicator";
    complete: string;
    current: string;
    incomplete: string;
  };
}>;

export type SeparatorTraits = Traits<{
  data: {
    scope: "steps";
    part: "separator";
    orientation: "horizontal" | "vertical";
    complete: string;
    current: string;
    incomplete: string;
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "steps";
    part: "content";
    state: "open" | "closed";
    orientation: "horizontal" | "vertical";
  };
}>;

export type ProgressTraits = Traits<{
  data: {
    scope: "steps";
    part: "progress";
    complete: string;
  };
}>;
