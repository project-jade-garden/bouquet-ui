import { toastStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { XIcon } from "lucide-react";
import { createToaster, Toast } from "../../../src";

const meta = {
  title: "Components / Toast"
} satisfies Meta<typeof Base>;

export default meta;

const toaster = createToaster({
  placement: "bottom-end",
  overlap: true,
  gap: 24
});

export const Base = () => {
  const styles = toastStyles();

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: "Toast Title",
            description: "Toast Description",
            type: "info"
          })
        }
      >
        Add Toast
      </button>
      <Toast.Toaster toaster={toaster}>
        {(toast) => (
          <Toast.Root className={styles.root()} key={toast.id}>
            <Toast.Title className={styles.title()}>{toast.title}</Toast.Title>
            <Toast.Description className={styles.description()}>{toast.description}</Toast.Description>
            <Toast.CloseTrigger className={styles.closeTrigger()}>
              <XIcon />
            </Toast.CloseTrigger>
          </Toast.Root>
        )}
      </Toast.Toaster>
    </div>
  );
};
