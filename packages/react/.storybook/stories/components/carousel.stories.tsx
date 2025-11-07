import { type CarouselStyles, carouselStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
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
    <Carousel.Root className={styles.root()} defaultPage={0} slideCount={images.length} spacing="16px">
      <Carousel.ItemGroup className={styles.itemGroup()}>
        {images.map((image, index) => (
          <Carousel.Item className={styles.item()} key={index} index={index}>
            <img src={image} alt={`Slide ${index}`} className="rounded-lg h-fit w-full object-cover" />
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control className={styles.control()}>
        <Carousel.PrevTrigger className={styles.prevTrigger()}>Previous</Carousel.PrevTrigger>
        <Carousel.IndicatorGroup className={styles.indicatorGroup()}>
          {images.map((_, index) => (
            <Carousel.Indicator className={styles.indicator()} key={index} index={index} />
          ))}
        </Carousel.IndicatorGroup>
        <Carousel.NextTrigger className={styles.nextTrigger()}>Next</Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
};
