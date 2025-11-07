<script lang="ts">
  import { collapsibleStyles } from "@bouquet-ui/design";
  import { ChevronDownIcon } from "lucide-svelte";
  import { Collapsible } from "../../../../src/lib";

  const styles = collapsibleStyles();
</script>

<Collapsible.Root class={styles.root()}>
  <Collapsible.Trigger class={styles.trigger()}>
    Toggle
    <Collapsible.Indicator class={styles.indicator()}>
      <ChevronDownIcon />
    </Collapsible.Indicator>
  </Collapsible.Trigger>
  <Collapsible.Content class={styles.content()}>Content</Collapsible.Content>
</Collapsible.Root>
