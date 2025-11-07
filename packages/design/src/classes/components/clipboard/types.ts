// * https://ark-ui.com/docs/components/clipboard#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "clipboard";
    part: "root";
    copied: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "clipboard";
    part: "control";
    copied: string;
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "clipboard";
    part: "trigger";
    copied: string;
  };
}>;

export type InputTraits = Traits<{
  data: {
    scope: "clipboard";
    part: "input";
    copied: string;
    readonly: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "clipboard";
    part: "label";
    copied: string;
  };
}>;
