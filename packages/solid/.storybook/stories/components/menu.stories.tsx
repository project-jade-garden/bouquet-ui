import { buttonStyles, type MenuStyles, menuStyles } from "@bouquet-ui/design";
import {
  ChevronRightIcon,
  CirclePlusIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon
} from "lucide-solid";
import type { Meta } from "storybook-solidjs-vite";
import { Menu } from "../../../src";

const meta = {
  args: {
    size: "md"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", undefined]
    }
  },
  title: "Components / Menu"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: MenuStyles.Variants) => {
  const styles = menuStyles(props);

  return (
    <Menu.Root>
      <Menu.Trigger class={styles.trigger({ class: buttonStyles() })}>
        Open menu <Menu.Indicator class={styles.indicator()}>➡️</Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner class={styles.positioner()}>
        <Menu.Content class={styles.content()}>
          <Menu.ItemGroup class={styles.itemGroup()}>
            <Menu.ItemGroupLabel class={styles.itemGroupLabel()}>My Account</Menu.ItemGroupLabel>
            <Menu.Separator class={styles.separator()} />
            <Menu.Item class={styles.item()} value="profile">
              <div class="flex items-center flex-row gap-6 justify-between flex-1">
                <div class="flex items-center flex-row gap-2">
                  <UserIcon />
                  Profile
                </div>
                <span class="text-sm">⇧⌘P</span>
              </div>
            </Menu.Item>
            <Menu.Item class={styles.item()} value="billing">
              <div class="flex items-center flex-row gap-2">
                <CreditCardIcon /> Billing
              </div>
            </Menu.Item>
            <Menu.Item class={styles.item()} value="settings">
              <div class="flex items-center flex-row gap-6 justify-between flex-1">
                <div class="flex items-center flex-row gap-2">
                  <SettingsIcon /> Settings
                </div>
                <span class="text-sm">⌘,</span>
              </div>
            </Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: -2 }}>
              <Menu.TriggerItem class={styles.triggerItem()}>
                <div class="flex items-center flex-row gap-2">
                  <UserPlusIcon />
                  Invite member
                </div>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner class={styles.positioner()}>
                <Menu.Content class={styles.content()}>
                  <Menu.Item class={styles.item()} value="email">
                    <div class="flex items-center flex-row gap-2">
                      <MailIcon /> Email
                    </div>
                  </Menu.Item>
                  <Menu.Item class={styles.item()} value="message">
                    <div class="flex items-center flex-row gap-2">
                      <MessageSquareIcon /> Message
                    </div>
                  </Menu.Item>
                  <Menu.Separator class={styles.separator()} />
                  <Menu.Item class={styles.item()} value="other">
                    <div class="flex items-center flex-row gap-2">
                      <CirclePlusIcon />
                      More Options...
                    </div>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator class={styles.separator()} />
            <Menu.Item class={styles.item()} value="logout">
              <div class="flex items-center flex-row gap-2">
                <LogOutIcon />
                Logout
              </div>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
