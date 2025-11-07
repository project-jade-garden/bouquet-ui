<script lang="ts">
  import { type InputStyles, inputStyles } from "@bouquet-ui/design";

  let props: InputStyles.Variants = $props();
  const styles = inputStyles(props);
  const type = props.type === "file" ? "file" : "text";
</script>

<input class={styles} placeholder="Search..." type={type} />
