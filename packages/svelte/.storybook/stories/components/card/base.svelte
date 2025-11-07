<script lang="ts">
  import { buttonStyles, CardStyles, cardStyles, fieldStyles } from "@bouquet-ui/design";
  import { Field } from "../../../../src/lib";

  let props: CardStyles.Variants = $props();
  const styles = cardStyles(props);
  const field = fieldStyles();
</script>

<div class={styles.root({ class: "w-sm" })}>
  <div class={styles.header()}>
    <h3 class={styles.title()}>Team Members</h3>
    <div class={styles.description()}>Add new members to your organisation.</div>
  </div>
  <div class={styles.body()}>
    <div class="v-stack-4">
      <Field.Root class={field.root()}>
        <Field.Label class={field.label()}>Name</Field.Label>
        <Field.Input class={field.input()} placeholder="Name" />
      </Field.Root>
      <Field.Root class={field.root()}>
        <Field.Label class={field.label()}>Email</Field.Label>
        <Field.Input class={field.input()} type="email" placeholder="Email" />
      </Field.Root>
    </div>
  </div>
  <div class={styles.footer({ class: "gap-3" })}>
    <button class={buttonStyles({ variant: "outline" })}>Cancel</button>
    <button class={buttonStyles()}>Invite</button>
  </div>
</div>
