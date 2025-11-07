<script lang="ts">
  import { type AvatarStyles, avatarStyles } from "@bouquet-ui/design";
  import { Avatar } from "../../../../src/lib";

  let props: AvatarStyles.Variants = $props();
  const styles = avatarStyles(props);
</script>

<Avatar.Root class={styles.root()}>
  <Avatar.Fallback class={styles.fallback()}>PA</Avatar.Fallback>
  <Avatar.Image class={styles.image()} src="https://i.pravatar.cc/300" alt="avatar" />
</Avatar.Root>
