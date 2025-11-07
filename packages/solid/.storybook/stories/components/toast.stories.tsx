import { toastStyles } from "@bouquet-ui/design";
import { XIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { createToaster, Toast } from "../../../src";

const meta = {
  title: "Components / Toast"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = toastStyles();

  const toaster = createToaster({
    placement: "bottom-end",
    gap: 24
  });

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: "Loading!",
            description: "We are loading something for you. Please wait.",
            type: "info"
          })
        }
      >
        Add Toast
      </button>
      <Toast.Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root class={styles.root()}>
            <Toast.Title class={styles.title()}>{toast().title}</Toast.Title>
            <Toast.Description class={styles.description()}>{toast().description}</Toast.Description>
            <Toast.CloseTrigger class={styles.closeTrigger()}>
              <XIcon />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toast.Toaster>
    </div>
  );
};
