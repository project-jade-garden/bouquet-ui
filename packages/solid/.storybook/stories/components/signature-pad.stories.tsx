import { signaturePadStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { SignaturePad } from "../../../src";

const meta = {
  title: "Components / Signature Pad"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = signaturePadStyles();

  return (
    <SignaturePad.Root class={styles.root()}>
      <SignaturePad.Label class={styles.label()}>Sign below</SignaturePad.Label>
      <SignaturePad.Control class={styles.control()}>
        <SignaturePad.Segment class={styles.segment()} />
        <SignaturePad.ClearTrigger class={styles.clearTrigger()}>Clear</SignaturePad.ClearTrigger>
        <SignaturePad.Guide class={styles.guide()} />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
};
