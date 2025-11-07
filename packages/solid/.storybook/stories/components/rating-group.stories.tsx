import { type RatingGroupStyles, ratingGroupStyles } from "@bouquet-ui/design";
import { StarIcon } from "lucide-solid";
import { Index, Show } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
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
    <RatingGroup.Root {...rest} class={styles.root()} count={5} defaultValue={3}>
      <RatingGroup.Label class={styles.label()}>Label</RatingGroup.Label>
      <RatingGroup.Control class={styles.control()}>
        <RatingGroup.Context>
          {(context) => (
            <Index each={context().items}>
              {(index) => (
                <RatingGroup.Item class={styles.item()} index={index()}>
                  <RatingGroup.ItemContext>
                    {(context) => (
                      <Show when={context().highlighted} fallback={<StarIcon />}>
                        <StarIcon fill="current" />
                      </Show>
                    )}
                  </RatingGroup.ItemContext>
                </RatingGroup.Item>
              )}
            </Index>
          )}
        </RatingGroup.Context>
        <RatingGroup.HiddenInput />
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};
