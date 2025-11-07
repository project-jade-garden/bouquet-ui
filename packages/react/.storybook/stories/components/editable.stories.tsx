import { editableStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Editable } from "../../../src";

const meta = {
  title: "Components / Editable"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = editableStyles();

  return (
    <Editable.Root className={styles.root()} placeholder="Placeholder">
      <Editable.Label className={styles.label()}>Label</Editable.Label>
      <Editable.Area className={styles.area()}>
        <Editable.Input className={styles.input()} />
        <Editable.Preview className={styles.preview()} />
      </Editable.Area>
    </Editable.Root>
  );
};
