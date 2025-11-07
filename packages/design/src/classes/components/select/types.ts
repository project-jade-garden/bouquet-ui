// * https://ark-ui.com/docs/components/select#api-reference
import type { Traits } from "jade-garden";

export type LabelTraits = Traits<{
  data: {
    scope: "select";
    part: "label";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "select";
    part: "trigger";
    state: "open" | "closed";
    disabled: string;
    invalid: string;
    readonly: string;
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    "placeholder-shown": string;
  };
}>;

export type IndicatorTraits = Traits<{
  data: {
    scope: "select";
    part: "indicator";
    state: "open" | "closed";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type ClearTriggerTraits = Traits<{
  data: {
    scope: "select";
    part: "clear-trigger";
    invalid: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "select";
    part: "item";
    value: string;
    state: "checked" | "unchecked";
    highlighted: string;
    disabled: string;
  };
}>;

export type ItemTextTraits = Traits<{
  data: {
    scope: "select";
    part: "item-text";
    state: "checked" | "unchecked";
    disabled: string;
    highlighted: string;
  };
}>;

export type ItemIndicatorTraits = Traits<{
  data: {
    scope: "select";
    part: "item-indicator";
    state: "checked" | "unchecked";
  };
}>;

export type ItemGroupTraits = Traits<{
  data: {
    scope: "select";
    part: "item-group";
    disabled: string;
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "select";
    part: "content";
    state: "open" | "closed";
    nested: "listbox";
    "has-nested": "listbox";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    activedescendant: string;
  };
}>;

export type RootTraits = Traits<{
  data: {
    scope: "select";
    part: "root";
    invalid: string;
    readonly: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "select";
    part: "control";
    state: "open" | "closed";
    focus: string;
    disabled: string;
    invalid: string;
  };
}>;

export type ValueTextTraits = Traits<{
  data: {
    scope: "select";
    part: "value-text";
    disabled: string;
    invalid: string;
    focus: string;
  };
}>;
