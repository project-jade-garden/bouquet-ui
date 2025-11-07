import { type CarouselStyles, carouselStyles } from "@bouquet-ui/design";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { Carousel } from "../../../src";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", undefined]
    }
  },
  title: "Components / Carousel"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: CarouselStyles.Variants) => {
  const styles = carouselStyles(props);
  const images = Array.from({ length: 5 }, (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`);

  return (
    <Carousel.Root class={styles.root()} defaultPage={0} slideCount={images.length} spacing="16px">
      <Carousel.ItemGroup class={styles.itemGroup()}>
        <Index each={images}>
          {(image, index) => (
            <Carousel.Item class={styles.item()} index={index}>
              <img src={image()} alt={`Slide ${index}`} class="rounded-lg h-fit w-full object-cover" />
            </Carousel.Item>
          )}
        </Index>
      </Carousel.ItemGroup>
      <Carousel.Control class={styles.control()}>
        <Carousel.PrevTrigger class={styles.prevTrigger()}>Previous</Carousel.PrevTrigger>
        <Carousel.IndicatorGroup class={styles.indicatorGroup()}>
          <Index each={images}>{(_, index) => <Carousel.Indicator class={styles.indicator()} index={index} />}</Index>
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger class={styles.nextTrigger()}>Next</Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};
