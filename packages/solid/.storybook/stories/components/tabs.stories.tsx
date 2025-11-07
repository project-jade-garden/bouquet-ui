import { type TabsStyles, tabsStyles } from "@bouquet-ui/design";
import { For } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
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
    <Tabs.Root class={styles.root()}>
      <Tabs.List class={styles.list()}>
        <For each={options}>
          {(option) => (
            <Tabs.Trigger class={styles.trigger()} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator class={styles.indicator()} />
      </Tabs.List>
      <For each={options}>
        {(option) => (
          <Tabs.Content class={styles.content()} value={option.id}>
            {option.label} Content
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  );
};

export const DisabledTab = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root class={styles.root()} defaultValue="react">
      <Tabs.List class={styles.list()}>
        <For each={options}>
          {(option) => (
            <Tabs.Trigger class={styles.trigger()} value={option.id} disabled={option.id === "svelte"}>
              {option.label}
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator class={styles.indicator()} />
      </Tabs.List>
      <For each={options}>
        {(option) => (
          <Tabs.Content class={styles.content()} value={option.id}>
            {option.label} Content
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  );
};

export const Manual = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root class={styles.root()} activationMode="manual" defaultValue="react">
      <Tabs.List class={styles.list()}>
        <For each={options}>
          {(option) => (
            <Tabs.Trigger class={styles.trigger()} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator class={styles.indicator()} />
      </Tabs.List>
      <For each={options}>
        {(option) => (
          <Tabs.Content class={styles.content()} value={option.id}>
            {option.label} Content
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  );
};

export const Vertical = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  return (
    <Tabs.Root class={styles.root()} orientation="vertical" defaultValue="react">
      <Tabs.List class={styles.list()}>
        <For each={options}>
          {(option) => (
            <Tabs.Trigger class={styles.trigger()} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator class={styles.indicator()} />
      </Tabs.List>
      <For each={options}>
        {(option) => (
          <Tabs.Content class={styles.content()} value={option.id}>
            {option.label} Content
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  );
};
