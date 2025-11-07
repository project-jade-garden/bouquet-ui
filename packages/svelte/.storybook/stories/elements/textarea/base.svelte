<script lang="ts">
  import { type TextareaStyles, textareaStyles } from "@bouquet-ui/design";

  let props: TextareaStyles.Variants = $props();
  const styles = textareaStyles(props);
</script>

<textarea class={styles} placeholder="Type something..."></textarea>
