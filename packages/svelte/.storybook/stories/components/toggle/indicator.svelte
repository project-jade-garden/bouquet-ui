<script lang="ts">
  import { toggleStyles } from "@bouquet-ui/design";
  import { Volume, VolumeOff } from "lucide-svelte";
  import { Toggle } from "../../../../src/lib";

  let props: Toggle.RootProps = $props();
  const styles = toggleStyles();
</script>

<Toggle.Root {...props} class={styles.root()}>
  <Toggle.Indicator class={styles.indicator()}>
    {#snippet fallback()}
      <Volume />
    {/snippet}
    <VolumeOff />
  </Toggle.Indicator>
</Toggle.Root>
