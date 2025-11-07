<script lang="ts">
  import { fileUploadStyles } from "@bouquet-ui/design";
  import { FileIcon } from "lucide-svelte";
  import { FileUpload } from "../../../../src/lib";

  const styles = fileUploadStyles();
</script>

<FileUpload.Root class={styles.root()} maxFiles={5}>
  <FileUpload.Label class={styles.label()}>File Upload</FileUpload.Label>
  <FileUpload.Trigger class={styles.trigger()}>Choose file(s)</FileUpload.Trigger>
  <FileUpload.ItemGroup class={styles.itemGroup()}>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
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
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>
