<script setup lang="ts">
  import { toastStyles } from "@bouquet-ui/design";
  import { createToaster, Toast } from "../../../../src";

  const styles = toastStyles();
  const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 24 })

  const createToast = () => {
    toaster.create({
      title: "Title",
      description: "Description",
      type: "info",
    })
  }
</script>

<template>
  <button @click="createToast">Create Toast</button>
  <Toast.Toaster :toaster="toaster" v-slot="toast">
    <Toast.Root :class="styles.root()">
      <Toast.Title :class="styles.title()">{{ toast.title }}</Toast.Title>
      <Toast.Description :class="styles.description()">{{ toast.description }}</Toast.Description>
      <Toast.ActionTrigger :class="styles.actionTrigger()">Action</Toast.ActionTrigger>
      <Toast.CloseTrigger :class="styles.closeTrigger()">
        Close
      </Toast.CloseTrigger>
    </Toast.Root>
  </Toast.Toaster>
</template>
