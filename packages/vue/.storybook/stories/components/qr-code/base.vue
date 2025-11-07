<script setup lang="ts">
  import { buttonStyles, qrCodeStyles } from "@bouquet-ui/design";
  import { Download } from "lucide-vue-next";
  import { QrCode } from "../../../../src";

  const styles = qrCodeStyles();
</script>

<template>
  <QrCode.Root :class="styles.root()" defaultValue="https://github.com/project-jade-garden/bouquet-ui">
    <QrCode.Frame :class="styles.frame()">
      <QrCode.Pattern :class="styles.pattern()" />
    </QrCode.Frame>
    <QrCode.DownloadTrigger
      :class="styles.downloadTrigger({ class: buttonStyles({ class: 'w-full' }) })"
      fileName="qr-code.png"
      mimeType="image/png"
    >
      <Download />
      Download
    </QrCode.DownloadTrigger>
  </QrCode.Root>
</template>
