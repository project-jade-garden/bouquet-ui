// * https://ark-ui.com/docs/components/tags-input#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "root";
    invalid: string;
    readonly: string;
    disabled: string;
    focus: string;
    empty: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "label";
    disabled: string;
    invalid: string;
    readonly: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "control";
    disabled: string;
    readonly: string;
    invalid: string;
    focus: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "input";
    invalid: string;
    readonly: string;
  };
}>;

export type ClearTriggerTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "clear-trigger";
    readonly: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "item";
    value: string;
    disabled: string;
  };
}>;

export type ItemPreviewTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "item-preview";
    value: string;
    disabled: string;
    highlighted: string;
  };
}>;

export type ItemTextTraits = Traits<{
  data: {
    scope: "tags-input";
    part: "item-text";
    disabled: string;
    highlighted: string;
  };
}>;
