import { type AvatarStyles, avatarStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Avatar } from "../../../src";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl", undefined]
    }
  },
  title: "Components / Avatar"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: AvatarStyles.Variants) => {
  const styles = avatarStyles(props);

  return (
    <Avatar.Root class={styles.root()}>
      <Avatar.Fallback class={styles.fallback()}>PA</Avatar.Fallback>
      <Avatar.Image class={styles.image()} src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  );
};
