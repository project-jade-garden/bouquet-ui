<script lang="ts">
  import { type CarouselStyles, carouselStyles } from "@bouquet-ui/design";
  import { Carousel } from "../../../../src/lib";

  let props: CarouselStyles.Variants = $props();
  const styles = carouselStyles(props);

  const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`)
</script>

<Carousel.Root class={styles.root()} defaultPage={0} slideCount={images.length} spacing="16px">
  <Carousel.Control class={styles.control()}>
    <Carousel.PrevTrigger class={styles.prevTrigger()}>Previous</Carousel.PrevTrigger>
    <Carousel.NextTrigger class={styles.nextTrigger()}>Next</Carousel.NextTrigger>
  </Carousel.Control>
  <Carousel.IndicatorGroup class={styles.indicatorGroup()}>
    {#each images as _, index}
      <Carousel.Indicator class={styles.indicator()} index={index} />
    {/each}
  </Carousel.IndicatorGroup>
  <Carousel.ItemGroup class={styles.itemGroup()}>
    {#each images as image, index}
      <Carousel.Item class={styles.item()} index={index}>
        <img src={image} alt={`Slide ${index}`} />
      </Carousel.Item>
    {/each}
  </Carousel.ItemGroup>
</Carousel.Root>
