// * https://ark-ui.com/docs/components/toast#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "toast";
    part: "root";
    state: "open" | "closed";
    type: "success" | "error" | "warning" | "info";
    placement: "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end";
    align: string;
    side: string;
    mounted: string;
    paused: string;
    first: string;
    sibling: string;
    stack: string;
    overlap: string;
  };
}>;
