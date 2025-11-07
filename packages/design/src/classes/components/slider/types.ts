// * https://ark-ui.com/docs/components/slider#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "slider";
    part: "root";
    disabled: string;
    orientation: "horizontal" | "vertical";
    dragging: string;
    invalid: string;
    focus: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "slider";
    part: "label";
    disabled: string;
    orientation: "horizontal" | "vertical";
    invalid: string;
    dragging: string;
    focus: string;
  };
}>;

export type ThumbTraits = Traits<{
  data: {
    scope: "slider";
    part: "thumb";
    index: number;
    name: string;
    disabled: string;
    orientation: "horizontal" | "vertical";
    focus: string;
    dragging: string;
  };
}>;

export type ValueTextTraits = Traits<{
  data: {
    scope: "slider";
    part: "value-text";
    disabled: string;
    orientation: "horizontal" | "vertical";
    invalid: string;
    focus: string;
  };
}>;

export type TrackTraits = Traits<{
  data: {
    scope: "slider";
    part: "track";
    disabled: string;
    invalid: string;
    dragging: string;
    orientation: "horizontal" | "vertical";
    focus: string;
  };
}>;

export type RangeTraits = Traits<{
  data: {
    scope: "slider";
    part: "range";
    dragging: string;
    focus: string;
    invalid: string;
    disabled: string;
    orientation: "horizontal" | "vertical";
  };
}>;

export type ControlTraits = Traits<{
  data: {
    scope: "slider";
    part: "control";
    dragging: string;
    disabled: string;
    orientation: "horizontal" | "vertical";
    invalid: string;
    focus: string;
  };
}>;

export type MarkerGroupTraits = Traits<{
  data: {
    scope: "slider";
    part: "marker-group";
    orientation: "horizontal" | "vertical";
  };
}>;

export type MarkerTraits = Traits<{
  data: {
    scope: "slider";
    part: "marker";
    orientation: "horizontal" | "vertical";
    value: string;
    disabled: string;
    state: string;
  };
}>;

export type DraggingIndicatorTraits = Traits<{
  data: {
    scope: "slider";
    part: "dragging-indicator";
    orientation: "horizontal" | "vertical";
    state: "open" | "closed";
  };
}>;
