import { passwordInputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { PasswordInput } from "../../../src";

const meta = {
  title: "Components / Password Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = passwordInputStyles();

  return (
    <PasswordInput.Root className={styles.root()}>
      <PasswordInput.Label className={styles.label()}>Password</PasswordInput.Label>
      <PasswordInput.Control className={styles.control()}>
        <PasswordInput.Input className={styles.input()} />
        <PasswordInput.VisibilityTrigger className={styles.visibilityTrigger()}>
          <PasswordInput.Indicator className={styles.indicator()} fallback={<EyeOffIcon />}>
            <EyeIcon />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
};
