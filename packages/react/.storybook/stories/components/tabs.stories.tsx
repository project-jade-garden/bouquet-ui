import { type TabsStyles, tabsStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { Tabs } from "../../../src";

const meta = {
  args: {
    size: "md",
    variant: "line"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    },
    variant: {
      control: "select",
      options: ["enclosed", "line", "outline", undefined]
    }
  },
  title: "Components / Tabs"
} satisfies Meta<typeof Base>;

export default meta;

const options = [
  { id: "react", label: "React" },
  { id: "solid", label: "Solid" },
  { id: "svelte", label: "Svelte" },
  { id: "vue", label: "Vue" }
];

export const Base = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root className={styles.root()}>
      <Tabs.List className={styles.list()}>
        {options.map((option) => (
          <Tabs.Trigger key={option.id} className={styles.trigger()} value={option.id}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator className={styles.indicator()} />
      </Tabs.List>
      {options.map((option) => (
        <Tabs.Content key={option.id} className={styles.content()} value={option.id}>
          {option.label} Content
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export const DisabledTab = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root className={styles.root()}>
      <Tabs.List className={styles.list()}>
        {options.map((option) => (
          <Tabs.Trigger
            key={option.id}
            className={styles.trigger()}
            value={option.id}
            disabled={option.id === "svelte"}
          >
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator className={styles.indicator()} />
      </Tabs.List>
      {options.map((option) => (
        <Tabs.Content key={option.id} className={styles.content()} value={option.id}>
          {option.label} Content
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export const Manual = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root className={styles.root()} activationMode="manual" defaultValue="react">
      <Tabs.List className={styles.list()}>
        {options.map((option) => (
          <Tabs.Trigger key={option.id} className={styles.trigger()} value={option.id}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator className={styles.indicator()} />
      </Tabs.List>
      {options.map((option) => (
        <Tabs.Content key={option.id} className={styles.content()} value={option.id}>
          {option.label} Content
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export const Vertical = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root className={styles.root()} orientation="vertical" defaultValue="react">
      <Tabs.List className={styles.list()}>
        {options.map((option) => (
          <Tabs.Trigger key={option.id} className={styles.trigger()} value={option.id}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator className={styles.indicator()} />
      </Tabs.List>
      {options.map((option) => (
        <Tabs.Content key={option.id} className={styles.content()} value={option.id}>
          {option.label} Content
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
