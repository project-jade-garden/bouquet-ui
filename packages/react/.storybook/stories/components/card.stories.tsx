import { buttonStyles, type CardStyles, cardStyles, fieldStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
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
    <div className={styles.root({ className: "w-sm" })}>
      <div className={styles.header()}>
        <h3 className={styles.title()}>Team Members</h3>
        <div className={styles.description()}>Add new members to your organisation.</div>
      </div>
      <div className={styles.body()}>
        <div className="v-stack-4">
          <Field.Root className={field.root()}>
            <Field.Label className={field.label()}>Name</Field.Label>
            <Field.Input className={field.input({ className: inputStyles() })} placeholder="Name" />
          </Field.Root>
          <Field.Root className={field.root()}>
            <Field.Label className={field.label()}>Email</Field.Label>
            <Field.Input className={field.input({ className: inputStyles() })} type="email" placeholder="Email" />
          </Field.Root>
        </div>
      </div>
      <div className={styles.footer({ className: "gap-3" })}>
        <button className={buttonStyles({ variant: "outline" })}>Cancel</button>
        <button className={buttonStyles()}>Invite</button>
      </div>
    </div>
  );
};
