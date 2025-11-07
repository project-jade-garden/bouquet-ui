<script lang="ts">
  import { clipboardStyles } from "@bouquet-ui/design";
  import { CheckIcon, ClipboardCopyIcon } from "lucide-svelte";
  import { Clipboard } from "../../../../src/lib";

  const styles = clipboardStyles();
</script>

<Clipboard.Root class={styles.root()} value="https://github.com/project-jade-garden/bouquet-ui">
  <Clipboard.Label class={styles.label()}>Copy this link</Clipboard.Label>
  <Clipboard.Control class={styles.control()}>
    <Clipboard.Input class={styles.input()} />
    <Clipboard.Trigger class={styles.trigger()}>
      <Clipboard.Indicator class={styles.indicator()}>
        {#snippet copied()}
          <CheckIcon />
        {/snippet}
        <ClipboardCopyIcon />
      </Clipboard.Indicator>
    </Clipboard.Trigger>
  </Clipboard.Control>
</Clipboard.Root>