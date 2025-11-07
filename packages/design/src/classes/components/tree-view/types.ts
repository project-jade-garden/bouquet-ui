// * https://ark-ui.com/docs/components/tree-view#api-reference
import type { Traits } from "jade-garden";

export type BranchTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch";
    depth: number;
    branch: string;
    value: string;
    path: string;
    selected: string;
    state: "open" | "closed";
    disabled: string;
    loading: string;
  };
}>;

export type BranchContentTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch-content";
    state: "open" | "closed";
    depth: number;
    path: string;
    value: string;
  };
}>;

export type BranchControlTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch-control";
    path: string;
    state: "open" | "closed";
    disabled: string;
    selected: string;
    focus: string;
    value: string;
    depth: number;
    loading: string;
  };
}>;

export type BranchIndentGuideTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch-indent-guide";
    depth: number;
  };
}>;

export type BranchIndicatorTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch-indicator";
    state: "open" | "closed";
    disabled: string;
    selected: string;
    focus: string;
    loading: string;
  };
}>;

export type BranchTextTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch-text";
    disabled: string;
    state: "open" | "closed";
    loading: string;
  };
}>;

export type BranchTriggerTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "branch-trigger";
    disabled: string;
    state: "open" | "closed";
    value: string;
    loading: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "item";
    path: string;
    value: string;
    focus: string;
    selected: string;
    disabled: string;
    depth: number;
  };
}>;

export type ItemIndicatorTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "item-indicator";
    disabled: string;
    selected: string;
    focus: string;
  };
}>;

export type ItemTextTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "item-text";
    disabled: string;
    selected: string;
    focus: string;
  };
}>;

export type NodeCheckboxTraits = Traits<{
  data: {
    scope: "tree-view";
    part: "node-checkbox";
    state: "checked" | "unchecked" | "indeterminate";
    disabled: string;
  };
}>;
