<script lang="ts">
  import { type LinkStyles, linkStyles } from "@bouquet-ui/design";
  import { ArrowRightIcon } from "lucide-svelte";

  let props: LinkStyles.Variants = $props();
  const styles = linkStyles(props);
</script>

<a
  href="https://www.mozilla.org/"
  onclick={(e) => {
    e.preventDefault();
  }}
  class={styles}
>
  Link
  <ArrowRightIcon />
</a>
