// * https://ark-ui.com/docs/components/combobox#api-reference
import type { Traits, VariantProps } from "jade-garden";
import type { comboboxStyles } from ".";

export type RootTraits = Traits<{
  data: {
    scope: "combobox";
    part: "root";
    invalid: string;
    readonly: string;
  };
}>;

export type ClearTriggerTraits = Traits<{
  data: {
    scope: "combobox";
    part: "clear-trigger";
    invalid: string;
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "combobox";
    part: "content";
    state: "open" | "closed";
    nested: "listbox";
    "has-nested": "listbox";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    empty: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "combobox";
    part: "control";
    state: "open" | "closed";
    focus: string;
    disabled: string;
    invalid: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "combobox";
    part: "input";
    invalid: string;
    autofocus: string;
    state: "open" | "closed";
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "combobox";
    part: "item";
    highlighted: string;
    state: "checked" | "unchecked";
    disabled: string;
    value: string;
  };
}>;

export type ItemGroupTraits = Traits<{
  data: {
    scope: "combobox";
    part: "item-group";
    empty: string;
  };
}>;

export type ItemIndicatorTraits = Traits<{
  data: {
    scope: "combobox";
    part: "item-indicator";
    state: "checked" | "unchecked";
  };
}>;

export type ItemTextTraits = Traits<{
  data: {
    scope: "combobox";
    part: "item-text";
    state: "checked" | "unchecked";
    disabled: string;
    highlighted: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "combobox";
    part: "label";
    readonly: string;
    disabled: string;
    invalid: string;
    focus: string;
  };
}>;

export type ListTraits = Traits<{
  data: {
    scope: "combobox";
    part: "list";
    empty: string;
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "combobox";
    part: "trigger";
    state: "open" | "closed";
    invalid: string;
    focusable: string;
    readonly: string;
    disabled: string;
  };
}>;

export type Variants = VariantProps<typeof comboboxStyles>;
