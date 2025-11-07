import { buttonStyles, type CardStyles, cardStyles, fieldStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Field } from "../../../src";

const meta: Meta = {
  args: {
    variant: "outline"
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "soft", "subtle", undefined]
    }
  },
  title: "Components / Card"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: CardStyles.Variants) => {
  const styles = cardStyles(props);
  const field = fieldStyles();

  return (
    <div class={styles.root({ class: "w-sm" })}>
      <div class={styles.header()}>
        <h3 class={styles.title()}>Team Members</h3>
        <div class={styles.description()}>Add new members to your organisation.</div>
      </div>
      <div class={styles.body()}>
        <div class="v-stack-4">
          <Field.Root class={field.root()}>
            <Field.Label class={field.label()}>Name</Field.Label>
            <Field.Input class={field.input({ class: inputStyles() })} placeholder="Name" />
          </Field.Root>
          <Field.Root class={field.root()}>
            <Field.Label class={field.label()}>Email</Field.Label>
            <Field.Input class={field.input({ class: inputStyles() })} type="email" placeholder="Email" />
          </Field.Root>
        </div>
      </div>
      <div class={styles.footer({ class: "gap-3" })}>
        <button class={buttonStyles({ variant: "outline" })}>Cancel</button>
        <button class={buttonStyles()}>Invite</button>
      </div>
    </div>
  );
};
