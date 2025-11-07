import { editableStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Editable } from "../../../src";

const meta = {
  title: "Components / Editable"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = editableStyles();

  return (
    <Editable.Root class={styles.root()} placeholder="Placeholder">
      <Editable.Label class={styles.label()}>Label</Editable.Label>
      <Editable.Area class={styles.area()}>
        <Editable.Input class={styles.input()} />
        <Editable.Preview class={styles.preview()} />
      </Editable.Area>
    </Editable.Root>
  );
};
