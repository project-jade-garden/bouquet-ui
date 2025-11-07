<script lang="ts">
  import { type TabsStyles, tabsStyles } from "@bouquet-ui/design";
  import { Tabs } from "../../../../src/lib";

  let props: TabsStyles.Variants = $props();
  const styles = tabsStyles(props);

  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte" },
    { id: "vue", label: "Vue" }
  ];
</script>

<Tabs.Root class={styles.root()}>
  <Tabs.List class={styles.list()}>
    {#each options as option (option.id)}
      <Tabs.Trigger class={styles.trigger()} value={option.id} disabled={option.id === "svelte"}>
        {option.label}
      </Tabs.Trigger>
    {/each}
    <Tabs.Indicator class={styles.indicator()} />
  </Tabs.List>
  {#each options as option (option.id)}
    <Tabs.Content class={styles.content()} value={option.id}>
      {option.label} Content
    </Tabs.Content>
  {/each}
</Tabs.Root>
