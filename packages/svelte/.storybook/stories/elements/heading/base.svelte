<script lang="ts">
  import { type HeadingStyles, headingStyles } from "@bouquet-ui/design";

  let props: HeadingStyles.Variants = $props();
  const styles = headingStyles(props);
</script>

<h1 class={styles}>Heading</h1>
