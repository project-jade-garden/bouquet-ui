import { fieldStyles, inputStyles, textareaStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Field } from "../../../src";

const meta = {
  args: {
    disabled: false,
    invalid: false
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    invalid: {
      control: "boolean"
    }
  },
  title: "Components / Field"
} satisfies Meta<Field.RootProps>;

export default meta;

export const InputField = (props: Field.RootProps) => {
  const styles = fieldStyles();

  return (
    <Field.Root {...props} className={styles.root()}>
      <Field.Label className={styles.label()}>Label</Field.Label>
      <Field.Input
        className={styles.input({ className: inputStyles({ color: props.invalid ? "error" : "primary" }) })}
        placeholder="Placeholder"
      />
      <Field.HelperText className={styles.helperText()}>Some additional Info</Field.HelperText>
      <Field.ErrorText className={styles.errorText()}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};

export const TextareaField = (props: Field.RootProps) => {
  const styles = fieldStyles();

  return (
    <Field.Root {...props} className={styles.root()}>
      <Field.Label className={styles.label()}>Label</Field.Label>
      <Field.Textarea
        className={styles.textarea({
          className: textareaStyles({ color: props.invalid ? "error" : "primary" })
        })}
        placeholder="Enter your message..."
        autoresize
      />
      <Field.HelperText className={styles.helperText()}>Some additional Info</Field.HelperText>
      <Field.ErrorText className={styles.errorText()}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
