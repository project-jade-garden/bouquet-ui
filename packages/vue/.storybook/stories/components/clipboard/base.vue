<script setup lang="ts">
  import { clipboardStyles } from "@bouquet-ui/design";
  import { CheckIcon, ClipboardCopyIcon } from "lucide-vue-next";
  import { Clipboard } from "../../../../src";

  const styles = clipboardStyles();
</script>

<template>
  <Clipboard.Root :class="styles.root()" default-value="https://github.com/project-jade-garden/bouquet-ui">
    <Clipboard.Label :class="styles.label()">Copy this link</Clipboard.Label>
    <Clipboard.Control :class="styles.control()">
      <Clipboard.Input :class="styles.input()" />
      <Clipboard.Trigger :class="styles.trigger()">
        <Clipboard.Indicator :class="styles.indicator()">
          <ClipboardCopyIcon />
          <template #copied>
            <CheckIcon />
          </template>
        </Clipboard.Indicator>
      </Clipboard.Trigger>
    </Clipboard.Control>
  </Clipboard.Root>
</template>
