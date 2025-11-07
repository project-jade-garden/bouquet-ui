import { toggleGroupStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { ToggleGroup } from "../../../src";

const meta = {
  title: "Components / Toggle Group"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = toggleGroupStyles();

  return (
    <ToggleGroup.Root class={styles.root()} defaultValue={["b"]} multiple>
      <ToggleGroup.Item class={styles.item()} value="a">
        A
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item()} value="b">
        B
      </ToggleGroup.Item>
      <ToggleGroup.Item class={styles.item()} value="c">
        C
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
