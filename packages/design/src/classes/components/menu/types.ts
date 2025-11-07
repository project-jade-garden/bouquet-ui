// * https://ark-ui.com/docs/components/menu#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { menuStyles } from ".";

export type ContentTraits = Traits<{
  data: {
    scope: "menu";
    part: "content";
    state: "open" | "closed";
    nested: "menu";
    "has-nested": "menu";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;

export type ContextTriggerTraits = Traits<{
  data: {
    scope: "menu";
    part: "context-trigger";
    state: "open" | "closed";
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "menu";
    part: "indicator";
    state: "open" | "closed";
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "menu";
    part: "item";
    disabled: string;
    highlighted: string;
    value: string;
    valuetext: string;
  };
}>;

export type ItemIndicatorTraits = Traits<{
  data: {
    scope: "menu";
    part: "item-indicator";
    disabled: string;
    highlighted: string;
    state: "checked";
  };
}>;

export type ItemTextTraits = Traits<{
  data: {
    scope: "menu";
    part: "item-text";
    disabled: string;
    highlighted: string;
    state: "checked";
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "menu";
    part: "trigger";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    state: "open" | "closed";
  };
}>;

export type Variants = VariantProps<typeof menuStyles>;
