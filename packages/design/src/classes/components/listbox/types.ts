// * https://ark-ui.com/docs/components/listbox#api-reference
import type { Traits } from "jade-garden";

export type LabelTraits = Traits<{
  data: {
    scope: "listbox";
    part: "label";
    disabled: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "listbox";
    part: "input";
    disabled: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "listbox";
    part: "item";
    value: string;
    selected: string;
    layout: string;
    state: "checked" | "unchecked";
    orientation: "horizontal" | "vertical";
    highlighted: string;
    disabled: string;
  };
}>;

export type ItemTextTraits = Traits<{
  data: {
    scope: "listbox";
    part: "item-text";
    state: "checked" | "unchecked";
    disabled: string;
    highlighted: string;
  };
}>;

export type ItemIndicatorTraits = Traits<{
  data: {
    scope: "listbox";
    part: "item-indicator";
    state: "checked" | "unchecked";
  };
}>;

export type ItemGroupTraits = Traits<{
  data: {
    scope: "listbox";
    part: "item-group";
    disabled: string;
    orientation: "horizontal" | "vertical";
    empty: string;
  };
}>;

export type ContentTraits = Traits<{
  data: {
    scope: "listbox";
    part: "content";
    activedescendant: string;
    orientation: "horizontal" | "vertical";
    layout: string;
    empty: string;
  };
}>;

export type RootTraits = Traits<{
  data: {
    scope: "listbox";
    part: "root";
    orientation: "horizontal" | "vertical";
    disabled: string;
  };
}>;

export type ValueTextTraits = Traits<{
  data: {
    scope: "listbox";
    part: "value-text";
    disabled: string;
  };
}>;
