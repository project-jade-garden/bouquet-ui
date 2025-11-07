<script setup lang="ts">
  import { fileUploadStyles } from "@bouquet-ui/design";
  import { FileIcon } from "lucide-vue-next";
  import { FileUpload } from "../../../../src";

  const styles = fileUploadStyles();
</script>

<template>
  <FileUpload.Root :class="styles.root()" :maxFiles="5">
    <FileUpload.Label :class="styles.label()">File Upload</FileUpload.Label>
    <FileUpload.Trigger :class="styles.trigger()">Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup :class="styles.itemGroup()">
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item :class="styles.item()" v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemPreview :class="styles.itemPreview()" type="image/*">
            <FileUpload.ItemPreviewImage :class="styles.itemPreviewImage()" />
          </FileUpload.ItemPreview>
          <FileUpload.ItemPreview :class="styles.itemPreview()" type=".*">
            <FileIcon />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName :class="styles.itemName()" />
          <FileUpload.ItemSizeText :class="styles.itemSizeText()" />
          <FileUpload.ItemDeleteTrigger :class="styles.itemDeleteTrigger()">X</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
