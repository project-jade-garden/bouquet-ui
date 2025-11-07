// * https://ark-ui.com/docs/components/tabs#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { tabsStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "tabs";
    part: "root";
    orientation: "horizontal" | "vertical";
    focus: string;
  };
}>;

export type ListTraits = Traits<{
  data: {
    scope: "tabs";
    part: "list";
    focus: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "tabs";
    part: "trigger";
    orientation: "horizontal" | "vertical";
    disabled: string;
    value: string;
    selected: string;
    focus: string;
    ssr: string;
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "tabs";
    part: "content";
    selected: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "tabs";
    part: "indicator";
    orientation: "horizontal" | "vertical";
  };
}>;

export type Variants = VariantProps<typeof tabsStyles>;
