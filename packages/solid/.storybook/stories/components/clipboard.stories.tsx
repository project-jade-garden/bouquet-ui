import { clipboardStyles, inputStyles } from "@bouquet-ui/design";
import { CheckIcon, ClipboardCopyIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { Clipboard } from "../../../src";

const meta = {
  title: "Components / Clipboard"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = clipboardStyles();

  return (
    <Clipboard.Root class={styles.root()} value="https://github.com/project-jade-garden/bouquet-ui">
      <Clipboard.Label class={styles.label()}>Copy this link</Clipboard.Label>
      <Clipboard.Control class={styles.control()}>
        <Clipboard.Input class={styles.input({ classs: inputStyles() })} />
        <Clipboard.Trigger class={styles.trigger()}>
          <Clipboard.Indicator class={styles.indicator()} copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  );
};
