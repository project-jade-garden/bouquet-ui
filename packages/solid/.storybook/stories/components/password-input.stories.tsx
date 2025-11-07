import { passwordInputStyles } from "@bouquet-ui/design";
import { EyeIcon, EyeOffIcon } from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { PasswordInput } from "../../../src";

const meta = {
  title: "Components / Password Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = passwordInputStyles();

  return (
    <PasswordInput.Root class={styles.root()}>
      <PasswordInput.Label class={styles.label()}>Password</PasswordInput.Label>
      <PasswordInput.Control class={styles.control()}>
        <PasswordInput.Input class={styles.input()} />
        <PasswordInput.VisibilityTrigger class={styles.visibilityTrigger()}>
          <PasswordInput.Indicator class={styles.indicator()} fallback={<EyeOffIcon />}>
            <EyeIcon />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
};
