import { sva } from "jade-garden/sva";

export const qrCodeStyles = sva(
  {
    name: "qr-code",
    slots: ["root", "frame", "pattern", "overlay", "downloadTrigger"],
    base: {
      root: "w-fit",
      frame: "size-32 bg-white",
      pattern: "fill-black",
      overlay: [
        // Sizing
        "size-9",

        // Borders
        "rounded-full",

        // Layout
        "outline",
        "outline-2",
        "outline-white"
      ]
    }
  },
  {
    description: "A component that generates a QR code based on the provided data.",
    name: "QR Code",
    see: "https://github.com/project-jade-garden/bouquet-ui/blob/main/packages/design/src/classes/components/qr-code"
  }
);
