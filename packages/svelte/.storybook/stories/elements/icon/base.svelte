<script lang="ts">
  import { type IconStyles, iconStyles } from "@bouquet-ui/design";
  import { Lightbulb } from "lucide-svelte";

  let props: IconStyles.Variants = $props();
  const styles = iconStyles(props);
</script>

<Lightbulb class={styles} />;
