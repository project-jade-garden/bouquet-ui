// * https://ark-ui.com/docs/components/splitter#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "splitter";
    part: "root";
    orientation: "horizontal" | "vertical";
  };
}>;

export type PanelTraits = Traits<{
  data: {
    scope: "splitter";
    part: "panel";
    orientation: "horizontal" | "vertical";
    id: string;
    index: number;
  };
}>;

export type ResizeTriggerTraits = Traits<{
  data: {
    scope: "splitter";
    part: "resize-trigger";
    id: string;
    orientation: "horizontal" | "vertical";
    focus: string;
    disabled: string;
  };
}>;
