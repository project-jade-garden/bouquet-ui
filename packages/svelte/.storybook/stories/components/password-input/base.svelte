<script lang="ts">
  import { passwordInputStyles } from "@bouquet-ui/design";
  import { EyeIcon, EyeOffIcon } from "lucide-svelte";
  import { PasswordInput } from "../../../../src/lib";

  const styles = passwordInputStyles();
</script>

<PasswordInput.Root class={styles.root()}>
  <PasswordInput.Label class={styles.label()}>Password</PasswordInput.Label>
  <PasswordInput.Control class={styles.control()}>
    <PasswordInput.Input class={styles.input()} />
    <PasswordInput.VisibilityTrigger class={styles.visibilityTrigger()}>
      <PasswordInput.Indicator class={styles.indicator()}>
        {#snippet fallback()}
          <EyeOffIcon />
        {/snippet}
        <EyeIcon />
      </PasswordInput.Indicator>
    </PasswordInput.VisibilityTrigger>
  </PasswordInput.Control>
</PasswordInput.Root>
