<script setup lang="ts">
  import { buttonStyles, dialogStyles } from "@bouquet-ui/design";
  import { XIcon } from "lucide-vue-next";
  import { Dialog } from "../../../../src";

  const styles = dialogStyles();
</script>

<template>
  <Dialog.Root>
    <Dialog.Trigger :class="styles.trigger({ class: buttonStyles() })">Open Dialog</Dialog.Trigger>
     <Teleport to="body">
      <Dialog.Backdrop :class="styles.backdrop()" />
      <Dialog.Positioner :class="styles.positioner()">
        <Dialog.Content :class="styles.content()">
          <div class="v-stack-8 p-6">
            <div class="v-stack-1">
              <Dialog.Title :class="styles.title()">Dialog Title</Dialog.Title>
              <Dialog.Description :class="styles.description()">Dialog Description</Dialog.Description>
            </div>
            <div class="h-stack-3 w-full">
              <Dialog.CloseTrigger asChild>
                <button :class="buttonStyles({ class: styles.closeTrigger(), variant: 'outline' })">Close</button>
              </Dialog.CloseTrigger>
              <button :class="buttonStyles()">Confirm</button>
            </div>
          </div>
          <Dialog.CloseTrigger asChild>
            <button :class="buttonStyles({ class: styles.closeTrigger({ class: 'absolute! top-2 right-2' }), size: 'sm', variant: 'ghost' })" aria-label="Close Dialog">
              <XIcon />
            </button>
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Teleport>
  </Dialog.Root>
</template>
