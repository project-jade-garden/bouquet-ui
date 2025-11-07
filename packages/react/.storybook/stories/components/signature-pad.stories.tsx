import { signaturePadStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { SignaturePad } from "../../../src";

const meta = {
  title: "Components / Signature Pad"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = signaturePadStyles();

  return (
    <SignaturePad.Root className={styles.root()}>
      <SignaturePad.Label className={styles.label()}>Sign below</SignaturePad.Label>
      <SignaturePad.Control className={styles.control()}>
        <SignaturePad.Segment className={styles.segment()} />
        <SignaturePad.ClearTrigger className={styles.clearTrigger()}>Clear</SignaturePad.ClearTrigger>
        <SignaturePad.Guide className={styles.guide()} />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
};
