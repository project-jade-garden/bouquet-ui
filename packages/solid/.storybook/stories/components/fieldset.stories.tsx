import { fieldStyles, fieldsetStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Field, Fieldset } from "../../../src";

const meta = {
  title: "Components / Fieldset"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const { input } = fieldStyles();
  const styles = fieldsetStyles();

  return (
    <Fieldset.Root class={styles.root()}>
      <Fieldset.Legend class={styles.legend()}>Legend</Fieldset.Legend>
      <Field.Input class={input({ class: inputStyles() })} type="text" />
      <Fieldset.HelperText class={styles.helperText()}>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText class={styles.errorText()}>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  );
};
