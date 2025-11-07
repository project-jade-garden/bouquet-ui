<script lang="ts">
  import { type LabelStyles, labelStyles } from "@bouquet-ui/design";

  let props: LabelStyles.Variants = $props();
  const styles = labelStyles(props);
</script>

<label class={styles} for="">Label</label>
