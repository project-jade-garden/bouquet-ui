import { fileUploadStyles } from "@bouquet-ui/design";
import { FileIcon } from "lucide-solid";
import { For } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { FileUpload } from "../../../src";

const meta = {
  title: "Components / File Upload"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = fileUploadStyles();

  return (
    <FileUpload.Root class={styles.root()} maxFiles={5}>
      <FileUpload.Label class={styles.label()}>File Upload</FileUpload.Label>
      <FileUpload.Trigger class={styles.trigger()}>Choose file(s)</FileUpload.Trigger>
      <FileUpload.ItemGroup class={styles.itemGroup()}>
        <FileUpload.Context>
          {(context) => (
            <For each={context().acceptedFiles}>
              {(file) => (
                <FileUpload.Item class={styles.item()} file={file}>
                  <FileUpload.ItemPreview class={styles.itemPreview()} type="image/*">
                    <FileUpload.ItemPreviewImage class={styles.itemPreviewImage()} />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemPreview class={styles.itemPreview()} type=".*">
                    <FileIcon />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName class={styles.itemName()} />
                  <FileUpload.ItemSizeText class={styles.itemSizeText()} />
                  <FileUpload.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>X</FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              )}
            </For>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
