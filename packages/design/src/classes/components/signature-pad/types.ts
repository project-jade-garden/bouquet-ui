// * https://ark-ui.com/docs/components/signature-pad#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "signature-pad";
    part: "root";
    disabled: string;
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "signature-pad";
    part: "control";
    disabled: string;
  };
}>;

export type GuideTraits = Traits<{
  data: {
    scope: "signature-pad";
    part: "guide";
    disabled: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "signature-pad";
    part: "label";
    disabled: string;
  };
}>;
