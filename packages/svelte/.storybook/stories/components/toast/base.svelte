<script lang="ts">
  import { toastStyles } from "@bouquet-ui/design";
  import { X } from "lucide-svelte";
  import { createToaster, Toast } from "../../../../src/lib";

  const toaster = createToaster({
    placement: "bottom-end",
    overlap: true,
    gap: 24,
  })

  function addToast() {
    toaster.create({
      title: "Toast Title",
      description: "Toast Description",
      type: "info",
    })
  }

  const styles = toastStyles();
</script>

<div>
  <button type="button" onclick={addToast}>Add Toast</button>
  <Toast.Toaster {toaster}>
    {#snippet children(toast)}
      <Toast.Root>
        <Toast.Title>{toast().title}</Toast.Title>
        <Toast.Description>{toast().description}</Toast.Description>
        <Toast.CloseTrigger>
          <X />
        </Toast.CloseTrigger>
      </Toast.Root>
    {/snippet}
  </Toast.Toaster>
</div>