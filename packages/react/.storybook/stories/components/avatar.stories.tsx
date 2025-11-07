import { type AvatarStyles, avatarStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { User } from "lucide-react";
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
    <Avatar.Root className={styles.root()}>
      <Avatar.Fallback className={styles.fallback()}>
        <User />
      </Avatar.Fallback>
      <Avatar.Image className={styles.image()} src="https://i.pravatar.cc/300" alt="avatar" />
    </Avatar.Root>
  );
};
