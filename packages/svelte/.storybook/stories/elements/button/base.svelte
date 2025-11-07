<script lang="ts">
  import { type ButtonStyles, buttonStyles } from "@bouquet-ui/design";
  import { ArrowRightIcon } from "lucide-svelte";

  let props: ButtonStyles.Variants = $props();
  const styles = buttonStyles(props);
</script>

<button class={styles}>
  Button
  <ArrowRightIcon />
</button>