<script lang="ts">
  import { type CodeStyles, codeStyles } from "@bouquet-ui/design";

  let props: CodeStyles.Variants = $props();
  const styles = codeStyles(props);
</script>

<code class={styles}>@bouquet-ui/design</code>
