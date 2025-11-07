import { type RatingGroupStyles, ratingGroupStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { StarIcon } from "lucide-react";
import { RatingGroup } from "../../../src";

const meta = {
  args: {
    disabled: false,
    size: "md"
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Rating Group"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: RatingGroup.RootProps & RatingGroupStyles.Variants) => {
  const { size, ...rest } = props;
  const styles = ratingGroupStyles({ size });

  return (
    <RatingGroup.Root {...rest} className={styles.root()} count={5} defaultValue={3}>
      <RatingGroup.Label className={styles.label()}>Label</RatingGroup.Label>
      <RatingGroup.Control className={styles.control()}>
        <RatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingGroup.Item className={styles.item()} key={item} index={item}>
                <RatingGroup.ItemContext>
                  {({ highlighted }) => (highlighted ? <StarIcon fill="current" /> : <StarIcon />)}
                </RatingGroup.ItemContext>
              </RatingGroup.Item>
            ))
          }
        </RatingGroup.Context>
        <RatingGroup.HiddenInput />
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};
