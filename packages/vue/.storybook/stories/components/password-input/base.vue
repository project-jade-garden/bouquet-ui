<script setup lang="ts">
  import { passwordInputStyles } from "@bouquet-ui/design";
  import { EyeIcon, EyeOffIcon } from "lucide-vue-next";
  import { PasswordInput } from "../../../../src";

  const styles = passwordInputStyles();
</script>

<template>
  <PasswordInput.Root :class="styles.root()">
    <PasswordInput.Label :class="styles.label()">Password</PasswordInput.Label>
    <PasswordInput.Control :class="styles.control()">
      <PasswordInput.Input :class="styles.input()" />
      <PasswordInput.VisibilityTrigger :class="styles.visibilityTrigger()">
        <PasswordInput.Indicator :class="styles.indicator()">
          <EyeIcon />
          <template #fallback>
            <EyeOffIcon />
          </template>
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</template>
