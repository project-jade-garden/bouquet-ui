import { buttonStyles, type MenuStyles, menuStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon
} from "lucide-react";
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
      <Menu.Trigger className={styles.trigger({ className: buttonStyles() })}>
        Open menu <Menu.Indicator className={styles.indicator()}>➡️</Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner className={styles.positioner()}>
        <Menu.Content className={styles.content()}>
          <Menu.ItemGroup className={styles.itemGroup()}>
            <Menu.ItemGroupLabel className={styles.itemGroupLabel()}>My Account</Menu.ItemGroupLabel>
            <Menu.Separator className={styles.separator()} />
            <Menu.Item className={styles.item()} value="profile">
              <div className="flex items-center flex-row gap-6 justify-between flex-1">
                <div className="flex items-center flex-row gap-2">
                  <UserIcon />
                  Profile
                </div>
                <span className="text-sm">⇧⌘P</span>
              </div>
            </Menu.Item>
            <Menu.Item className={styles.item()} value="billing">
              <div className="flex items-center flex-row gap-2">
                <CreditCardIcon /> Billing
              </div>
            </Menu.Item>
            <Menu.Item className={styles.item()} value="settings">
              <div className="flex items-center flex-row gap-6 justify-between flex-1">
                <div className="flex items-center flex-row gap-2">
                  <SettingsIcon /> Settings
                </div>
                <span className="text-sm">⌘,</span>
              </div>
            </Menu.Item>
            <Menu.Root positioning={{ placement: "right-start", gutter: -2 }}>
              <Menu.TriggerItem className={styles.triggerItem()}>
                <div className="flex items-center flex-row gap-2">
                  <UserPlusIcon />
                  Invite member
                </div>
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Menu.Positioner className={styles.positioner()}>
                <Menu.Content className={styles.content()}>
                  <Menu.Item className={styles.item()} value="email">
                    <div className="flex items-center flex-row gap-2">
                      <MailIcon /> Email
                    </div>
                  </Menu.Item>
                  <Menu.Item className={styles.item()} value="message">
                    <div className="flex items-center flex-row gap-2">
                      <MessageSquareIcon /> Message
                    </div>
                  </Menu.Item>
                  <Menu.Separator className={styles.separator()} />
                  <Menu.Item className={styles.item()} value="other">
                    <div className="flex items-center flex-row gap-2">
                      <PlusCircleIcon />
                      More Options...
                    </div>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
            <Menu.Separator className={styles.separator()} />
            <Menu.Item className={styles.item()} value="logout">
              <div className="flex items-center flex-row gap-2">
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
