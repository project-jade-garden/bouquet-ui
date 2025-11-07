<script setup lang="ts">
  import { stepsStyles } from "@bouquet-ui/design";
  import { Steps } from "../../../../src";

  const items = [
    { value: "first", title: "First", description: "Contact Info" },
    { value: "second", title: "Second", description: "Date & Time" },
    { value: "third", title: "Third", description: "Select Rooms" },
  ];
  const styles = stepsStyles();
</script>

<template>
  <Steps.Root :class="styles.root()" :count="items.length">
    <Steps.List :class="styles.list()">
      <Steps.Item :class="styles.item()" v-for="(item, index) in items" :key="index" :index="index">
        <Steps.Trigger :class="styles.trigger()">
          <Steps.Indicator :class="styles.indicator()">{{ index + 1 }}</Steps.Indicator>
          <span>{{ item.title }}</span>
        </Steps.Trigger>
        <Steps.Separator />
      </Steps.Item>
    </Steps.List>

    <Steps.Content :class="styles.content()" v-for="(item, index) in items" :key="index" :index="index">
      {{ item.title }} - {{ item.description }}
    </Steps.Content>

    <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>

    <div>
      <Steps.PrevTrigger :class="styles.prevTrigger()">Back</Steps.PrevTrigger>
      <Steps.NextTrigger :class="styles.nextTrigger()">Next</Steps.NextTrigger>
    </div>
  </Steps.Root>
</template>
