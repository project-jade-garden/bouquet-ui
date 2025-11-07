// * https://ark-ui.com/docs/components/file-upload#api-reference
import type { Traits } from "jade-garden";

export type RootTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "root";
    disabled: string;
    dragging: string;
  };
}>;

export type DropzoneTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "dropzone";
    invalid: string;
    disabled: string;
    dragging: string;
  };
}>;

export type ItemTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item";
    disabled: string;
  };
}>;

export type ItemDeleteTriggerTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item-delete-trigger";
    disabled: string;
  };
}>;

export type ItemGroupTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item-group";
    disabled: string;
  };
}>;

export type ItemNameTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item-name";
    disabled: string;
  };
}>;

export type ItemPreviewTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item-preview";
    disabled: string;
  };
}>;

export type ItemPreviewImageTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item-preview-image";
    disabled: string;
  };
}>;

export type ItemSizeTextTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "item-size-text";
    disabled: string;
  };
}>;

export type LabelTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "label";
    disabled: string;
  };
}>;

export type TriggerTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "trigger";
    disabled: string;
    invalid: string;
  };
}>;

export type ClearTriggerTraits = Traits<{
  data: {
    scope: "file-upload";
    part: "clear-trigger";
    disabled: string;
  };
}>;
