<script lang="ts">
  import { type BlockquoteStyles, blockquoteStyles } from "@bouquet-ui/design";

  let props: BlockquoteStyles.Variants = $props();
  const styles = blockquoteStyles(props);
</script>

<blockquote class={styles}>
  The easy way is nevery right,
  <br />
  and the right way is never easy.
  <br />~ Engineers against AI
</blockquote>
