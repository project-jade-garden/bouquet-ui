<script setup lang="ts">
  import { type RatingGroupStyles, ratingGroupStyles } from "@bouquet-ui/design";
  import { StarIcon } from "lucide-vue-next";
  import { RatingGroup } from "../../../../src";

  const { disabled = false, ...rest } = defineProps<{
    disabled?: boolean;
    size?: "sm" | "md" | "lg" | undefined;
  }>();
  const styles = ratingGroupStyles({ ...rest });
</script>

<template>
  <RatingGroup.Root :class="styles.root()" :count="5" :default-value="3" :disabled="disabled">
    <RatingGroup.Label :class="styles.label()">Label</RatingGroup.Label>
    <RatingGroup.Control :class="styles.control()">
      <RatingGroup.Context v-slot="{ items }">
        <RatingGroup.Item :class="styles.item()" v-for="item in items" :key="item" :index="item">
          <RatingGroup.ItemContext v-slot="{ highlighted }">
            <StarIcon v-if="highlighted" fill="current" />
            <StarIcon v-else />
          </RatingGroup.ItemContext>
        </RatingGroup.Item>
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
  </RatingGroup.Root>
</template>
