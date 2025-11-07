// * https://ark-ui.com/docs/components/tour#api-reference
import type { Traits } from "jade-garden";

export type ContentTraits = Traits<{
  data: {
    scope: "tour";
    part: "content";
    state: "open" | "closed";
    nested: "popover";
    "has-nested": "popover";
    type: "tooltip" | "dialog" | "wait" | "floating";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    step: string;
  };
}>;

export type ActionTriggerTraits = Traits<{
  data: {
    scope: "tour";
    part: "action-trigger";
    type: "tooltip" | "dialog" | "wait" | "floating";
    disabled: string;
  };
}>;

export type CloseTriggerTraits = Traits<{
  data: {
    scope: "tour";
    part: "close-trigger";
    type: "tooltip" | "dialog" | "wait" | "floating";
  };
}>;

export type TitleTraits = Traits<{
  data: {
    scope: "tour";
    part: "title";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;

export type DescriptionTraits = Traits<{
  data: {
    scope: "tour";
    part: "description";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;

export type PositionerTraits = Traits<{
  data: {
    scope: "tour";
    part: "positioner";
    type: "tooltip" | "dialog" | "wait" | "floating";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
  };
}>;

export type BackdropTraits = Traits<{
  data: {
    scope: "tour";
    part: "backdrop";
    state: "open" | "closed";
    type: "tooltip" | "dialog" | "wait" | "floating";
  };
}>;
