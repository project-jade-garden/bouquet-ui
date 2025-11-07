import { buttonStyles, qrCodeStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
// @ts-expect-error: logo/asset
import logo from "../../../../../docs/public/svgs/logo.svg";
import { QrCode } from "../../../src";

const meta = {
  title: "Components / QR Code"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = qrCodeStyles();

  return (
    <QrCode.Root className={styles.root()} defaultValue="https://github.com/project-jade-garden/bouquet-ui">
      <QrCode.Frame className={styles.frame()}>
        <QrCode.Pattern className={styles.pattern()} />
      </QrCode.Frame>
      <QrCode.DownloadTrigger
        className={styles.downloadTrigger({ className: buttonStyles({ class: "w-full" }) })}
        fileName="qr-code.png"
        mimeType="image/png"
      >
        Download
      </QrCode.DownloadTrigger>
    </QrCode.Root>
  );
};

export const WithOverlay = () => {
  const styles = qrCodeStyles();

  return (
    <QrCode.Root
      className={styles.root()}
      defaultValue="https://github.com/project-jade-garden/bouquet-ui"
      encoding={{ ecc: "H" }}
    >
      <QrCode.Frame className={styles.frame()}>
        <QrCode.Pattern className={styles.pattern()} />
      </QrCode.Frame>
      <QrCode.Overlay className={styles.overlay({ className: "bg-[#7c86ff]" })}>
        <img src={logo} alt="Bouquet UI Logo" />
      </QrCode.Overlay>
    </QrCode.Root>
  );
};
