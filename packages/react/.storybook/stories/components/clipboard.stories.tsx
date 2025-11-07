import { clipboardStyles, inputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { CheckIcon, ClipboardCopyIcon } from "lucide-react";
import { Clipboard } from "../../../src";

const meta = {
  title: "Components / Clipboard"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = clipboardStyles();

  return (
    <Clipboard.Root className={styles.root()} value="https://github.com/project-jade-garden/bouquet-ui">
      <Clipboard.Label className={styles.label()}>Copy this link</Clipboard.Label>
      <Clipboard.Control className={styles.control()}>
        <Clipboard.Input className={styles.input({ className: inputStyles() })} />
        <Clipboard.Trigger className={styles.trigger()}>
          <Clipboard.Indicator className={styles.indicator()} copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  );
};
