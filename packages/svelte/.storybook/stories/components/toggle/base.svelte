<script lang="ts">
  import { toggleStyles } from "@bouquet-ui/design";
  import { BoldIcon } from "lucide-svelte";
  import { Toggle } from "../../../../src/lib";

  let props: Toggle.RootProps = $props();
  const styles = toggleStyles();
</script>

<Toggle.Root {...props} class={styles.root()}>
  <BoldIcon />
</Toggle.Root>
