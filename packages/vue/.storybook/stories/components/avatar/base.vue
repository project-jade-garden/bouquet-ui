<script setup lang="ts">
  import { type AvatarStyles, avatarStyles } from "@bouquet-ui/design";
  import { Avatar } from "../../../../src";

  const props = defineProps<{
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
  }>();
  const styles = avatarStyles(props);
</script>

<template>
  <Avatar.Root :class="styles.root()">
    <Avatar.Fallback :class="styles.fallback()">PA</Avatar.Fallback>
    <Avatar.Image :class="styles.image()" src="https://i.pravatar.cc/300" alt="avatar" />
  </Avatar.Root>
</template>
