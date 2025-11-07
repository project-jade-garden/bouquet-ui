<script setup lang="ts">
  import { signaturePadStyles } from "@bouquet-ui/design";
  import { SignaturePad } from "../../../../src";

  const styles = signaturePadStyles();
</script>

<template>
  <SignaturePad.Root :class="styles.root()">
    <SignaturePad.Label :class="styles.label()">Sign below</SignaturePad.Label>
    <SignaturePad.Control :class="styles.control()">
      <SignaturePad.Segment :class="styles.segment()" />
      <SignaturePad.ClearTrigger :class="styles.clearTrigger()">Clear</SignaturePad.ClearTrigger>
      <SignaturePad.Guide :class="styles.guide()" />
    </SignaturePad.Control>
  </SignaturePad.Root>
</template>
