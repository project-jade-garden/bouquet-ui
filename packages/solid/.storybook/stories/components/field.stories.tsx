import { fieldStyles, inputStyles, textareaStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
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
    <Field.Root {...props} class={styles.root()}>
      <Field.Label class={styles.label()}>Label</Field.Label>
      <Field.Input
        class={styles.input({ class: inputStyles({ color: props.invalid ? "error" : "primary" }) })}
        placeholder="Placeholder"
      />
      <Field.HelperText class={styles.helperText()}>Some additional Info</Field.HelperText>
      <Field.ErrorText class={styles.errorText()}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};

export const TextareaField = (props: Field.RootProps) => {
  const styles = fieldStyles();

  return (
    <Field.Root {...props} class={styles.root()}>
      <Field.Label class={styles.label()}>Label</Field.Label>
      <Field.Textarea
        class={styles.textarea({ class: textareaStyles({ color: props.invalid ? "error" : "primary" }) })}
        placeholder="Enter your message..."
        autoresize
      />
      <Field.HelperText class={styles.helperText()}>Some additional Info</Field.HelperText>
      <Field.ErrorText class={styles.errorText()}>Error Info</Field.ErrorText>
    </Field.Root>
  );
};
