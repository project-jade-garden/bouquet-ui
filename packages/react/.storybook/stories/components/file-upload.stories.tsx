import { fileUploadStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { FileIcon } from "lucide-react";
import { FileUpload } from "../../../src";

const meta = {
  title: "Components / File Upload"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = fileUploadStyles();

  return (
    <FileUpload.Root className={styles.root()} maxFiles={5}>
      <FileUpload.Label className={styles.label()}>File Upload</FileUpload.Label>
      <FileUpload.Trigger className={styles.trigger()}>Choose file(s)</FileUpload.Trigger>
      <FileUpload.ItemGroup className={styles.itemGroup()}>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item className={styles.item()} key={file.name} file={file}>
                <FileUpload.ItemPreview className={styles.itemPreview()} type="image/*">
                  <FileUpload.ItemPreviewImage className={styles.itemPreviewImage()} />
                </FileUpload.ItemPreview>
                <FileUpload.ItemPreview className={styles.itemPreview()} type=".*">
                  <FileIcon />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName className={styles.itemName()} />
                <FileUpload.ItemSizeText className={styles.itemSizeText()} />
                <FileUpload.ItemDeleteTrigger className={styles.itemDeleteTrigger()}>X</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            ))
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
