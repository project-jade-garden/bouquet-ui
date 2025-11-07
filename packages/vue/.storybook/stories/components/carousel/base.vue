<script setup lang="ts">
  import { type CarouselStyles, carouselStyles } from "@bouquet-ui/design";
  import { Carousel } from "../../../../src";

  const props = defineProps<{
    size?: "sm" | "md" | undefined;
  }>();
  const styles = carouselStyles(props);
  const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`)
</script>

<template>
  <Carousel.Root :class="styles.root()" :slide-count="images.length" spacing="16px">
    <Carousel.ItemGroup :class="styles.itemGroup()">
      <Carousel.Item :class="styles.item()" v-for="(image, idx) in images" :key="idx" :index="idx">
        <img :src="image" alt="" class="rounded-lg h-fit w-full object-cover" />
      </Carousel.Item>
    </Carousel.ItemGroup>
    <Carousel.Control :class="styles.control()">
      <Carousel.PrevTrigger :class="styles.prevTrigger()">Previous</Carousel.PrevTrigger>
      <Carousel.IndicatorGroup :class="styles.indicatorGroup()">
        <Carousel.Indicator :class="styles.indicator()" v-for="(_, idx) in images" :key="idx" :index="idx" />
      </Carousel.IndicatorGroup>
      <Carousel.NextTrigger :class="styles.nextTrigger()">Next</Carousel.NextTrigger>
    </Carousel.Control>
  </Carousel.Root>
</template>
