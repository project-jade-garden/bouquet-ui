<script lang="ts">
  import { type BadgeStyles, badgeStyles } from "@bouquet-ui/design";

  let props: BadgeStyles.Variants = $props();
  const styles = badgeStyles(props);
</script>

<span class={styles}>Badge</span>
