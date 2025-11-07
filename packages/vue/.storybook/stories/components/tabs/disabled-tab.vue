<script setup lang="ts">
  import { type TabsStyles, tabsStyles } from "@bouquet-ui/design";
  import { Tabs } from "../../../../src";

  const props = defineProps<{
    variant?: "enclosed" | "line" | "outline" | undefined;
    size?: "sm" | "md" | "lg" | undefined;
  }>();
  const styles = tabsStyles(props);

  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte" },
    { id: "vue", label: "Vue" }
  ];
</script>

<template>
  <Tabs.Root :class="styles.root()" defaultValue="react">
    <Tabs.List :class="styles.list()">
      <Tabs.Trigger :class="styles.trigger()" v-for="option in options" :key="option.id" :value="option.id" :disabled="option.id === 'svelte'">
        {{option.label}}
      </Tabs.Trigger>
    <Tabs.Indicator :class="styles.indicator()" />
    </Tabs.List>
    <Tabs.Content :class="styles.content()" v-for="option in options" :key="option.id" :value="option.id">
      {{ option.label }} Content
    </Tabs.Content>
  </Tabs.Root>
</template>
