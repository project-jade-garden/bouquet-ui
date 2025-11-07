import { fieldStyles, fieldsetStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Field, Fieldset } from "../../../src";

const meta = {
  title: "Components / Fieldset"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const { input } = fieldStyles();
  const styles = fieldsetStyles();

  return (
    <Fieldset.Root className={styles.root()}>
      <Fieldset.Legend className={styles.legend()}>Legend</Fieldset.Legend>
      <Field.Input className={input({ className: inputStyles() })} type="text" />
      <Fieldset.HelperText className={styles.helperText()}>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText className={styles.errorText()}>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  );
};
