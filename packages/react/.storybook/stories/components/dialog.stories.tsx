import { buttonStyles, dialogStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { XIcon } from "lucide-react";
import { Dialog, Portal } from "../../../src";

const meta = {
  title: "Components / Dialog"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = dialogStyles();

  return (
    <Dialog.Root>
      <Dialog.Trigger className={styles.trigger({ className: buttonStyles() })}>Open Dialog</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className={styles.backdrop()} />
        <Dialog.Positioner className={styles.positioner()}>
          <Dialog.Content className={styles.content()}>
            <div className="v-stack-8 p-6">
              <div className="v-stack-1">
                <Dialog.Title className={styles.title()}>Dialog Title</Dialog.Title>
                <Dialog.Description className={styles.description()}>Dialog Description</Dialog.Description>
              </div>
              <div className="h-stack-3 w-full">
                <Dialog.CloseTrigger asChild className={styles.closeTrigger()}>
                  <button className={buttonStyles({ variant: "outline" })}>Close</button>
                </Dialog.CloseTrigger>
                <button className={buttonStyles()}>Confirm</button>
              </div>
            </div>
            <Dialog.CloseTrigger asChild className={styles.closeTrigger({ className: "absolute! top-2 right-2" })}>
              <button className={buttonStyles({ size: "sm", variant: "ghost" })} aria-label="Close Dialog">
                <XIcon />
              </button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
