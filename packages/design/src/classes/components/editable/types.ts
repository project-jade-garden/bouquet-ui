// * https://ark-ui.com/docs/components/editable#api-reference
import type { Traits } from "jade-garden";

export type AreaTraits = Traits<{
  data: {
    scope: "editable";
    part: "area";
    focus: string;
    disabled: string;
    "placeholder-shown": string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "editable";
    part: "label";
    focus: string;
    invalid: string;
  };
}>;

export type PreviewTraits = Traits<{
  data: {
    scope: "editable";
    part: "preview";
    "placeholder-shown": string;
    readonly: string;
    disabled: string;
    invalid: string;
    autoresize: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "editable";
    part: "input";
    disabled: string;
    readonly: string;
    invalid: string;
    autoresize: string;
  };
}>;
