<script setup lang="ts">
  import { tagsInputStyles } from "@bouquet-ui/design";
  import { TagsInput } from "../../../../src";

  const styles = tagsInputStyles();
</script>

<template>
  <TagsInput.Root :class="styles.root()">
    <TagsInput.Context v-slot="tagsInput">
      <TagsInput.Label :class="styles.label()">Frameworks</TagsInput.Label>
      <TagsInput.Control :class="styles.control()">
        <TagsInput.Item :class="styles.item()" v-for="(value, index) in tagsInput.value" :key="index" :index="index" :value="value">
          <TagsInput.ItemPreview :class="styles.itemPreview()">
            <TagsInput.ItemText :class="styles.itemText()">{{ value }}</TagsInput.ItemText>
            <TagsInput.ItemDeleteTrigger :class="styles.itemDeleteTrigger()">Delete</TagsInput.ItemDeleteTrigger>
          </TagsInput.ItemPreview>
          <TagsInput.ItemInput :class="styles.itemInput()" />
        </TagsInput.Item>
        <TagsInput.Input :class="styles.input()" placeholder="Add Framework" />
        <TagsInput.ClearTrigger :class="styles.clearTrigger()">Clear all</TagsInput.ClearTrigger>
      </TagsInput.Control>
    </TagsInput.Context>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
</template>
