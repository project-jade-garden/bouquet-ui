<script setup lang="ts">
  import { type AccordionStyles, accordionStyles } from "@bouquet-ui/design";
  import { ChevronDownIcon } from "lucide-vue-next";
  import { ref } from "vue";
  import { Accordion } from "../../../../src";

  const items = ref(["React", "Solid", "Vue", "Svelte"]);
  const styles = accordionStyles();
</script>

<template>
  <Accordion.Root :class="styles.root()" :defaultValue="['React']">
    <Accordion.Item :class="styles.item()" v-for="item in items" :key="item" :value="item">
      <Accordion.ItemTrigger :class="styles.itemTrigger()">
        What is {{ item }}?
        <Accordion.ItemIndicator :class="styles.itemIndicator()">
          <ChevronDownIcon />
        </Accordion.ItemIndicator>
      </Accordion.ItemTrigger>
      <Accordion.ItemContent :class="styles.itemContent()">{{ item }} is a JavaScript library for building user interfaces.</Accordion.ItemContent>
    </Accordion.Item>
  </Accordion.Root>
</template>
