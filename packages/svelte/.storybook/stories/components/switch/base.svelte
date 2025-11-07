<script lang="ts">
  import { switchStyles } from "@bouquet-ui/design";
  import { Switch } from "../../../../src/lib";

  let props: Switch.RootProps = $props();
  const styles = switchStyles();
</script>

<Switch.Root {...props} class={styles.root()}>
  <Switch.Control class={styles.control()}>
    <Switch.Thumb class={styles.thumb()} />
  </Switch.Control>
  <Switch.Label class={styles.label()}>Label</Switch.Label>
  <Switch.HiddenInput />
</Switch.Root>
