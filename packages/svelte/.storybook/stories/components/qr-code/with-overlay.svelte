<script lang="ts">
  import { qrCodeStyles } from "@bouquet-ui/design";
  import logo from "../../../../../../docs/public/svgs/logo.svg";
  import { QrCode } from "../../../../src/lib";

  console.log(logo);
  const styles = qrCodeStyles();
</script>

<QrCode.Root class={styles.root()} defaultValue="https://github.com/project-jade-garden/bouquet-ui" encoding={{ ecc: "H" }}>
  <QrCode.Frame class={styles.frame()}>
    <QrCode.Pattern class={styles.pattern()} />
  </QrCode.Frame>
  <QrCode.Overlay class={styles.overlay({class: "bg-[#7c86ff]"})}>
    <img src={logo} alt="Bouquet UI Logo" />
  </QrCode.Overlay>
</QrCode.Root>
