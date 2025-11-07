import { stepsStyles } from "@bouquet-ui/design";
import { For } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { Steps } from "../../../src";

const meta = {
  title: "Components / Steps"
} satisfies Meta<typeof Base>;

export default meta;

const items = [
  { value: "first", title: "First", description: "Contact Info" },
  { value: "second", title: "Second", description: "Date & Time" },
  { value: "third", title: "Third", description: "Select Rooms" }
];

export const Base = () => {
  const styles = stepsStyles();

  return (
    <Steps.Root class={styles.root()} count={items.length}>
      <Steps.List class={styles.list()}>
        <For each={items}>
          {(item, index) => (
            <Steps.Item class={styles.item()} index={index()}>
              <Steps.Trigger class={styles.trigger()}>
                <Steps.Indicator class={styles.indicator()}>{index() + 1}</Steps.Indicator>
                <span>{item.title}</span>
              </Steps.Trigger>
              <Steps.Separator class={styles.separator()} />
            </Steps.Item>
          )}
        </For>
      </Steps.List>

      <For each={items}>
        {(item, index) => (
          <Steps.Content class={styles.content()} index={index()}>
            {item.title} - {item.description}
          </Steps.Content>
        )}
      </For>

      <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>

      <div>
        <Steps.PrevTrigger class={styles.prevTrigger()}>Back</Steps.PrevTrigger>
        <Steps.NextTrigger class={styles.nextTrigger()}>Next</Steps.NextTrigger>
      </div>
    </Steps.Root>
  );
};
