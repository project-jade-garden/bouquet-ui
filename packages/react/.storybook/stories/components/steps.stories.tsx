import { stepsStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
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
    <Steps.Root className={styles.root()} count={items.length}>
      <Steps.List className={styles.list()}>
        {items.map((item, index) => (
          <Steps.Item className={styles.item()} key={index} index={index}>
            <Steps.Trigger className={styles.trigger()}>
              <Steps.Indicator className={styles.indicator()}>{index + 1}</Steps.Indicator>
              <span>{item.title}</span>
            </Steps.Trigger>
            <Steps.Separator className={styles.separator()} />
          </Steps.Item>
        ))}
      </Steps.List>

      {items.map((item, index) => (
        <Steps.Content className={styles.content()} key={index} index={index}>
          {item.title} - {item.description}
        </Steps.Content>
      ))}

      <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>

      <div>
        <Steps.PrevTrigger className={styles.prevTrigger()}>Back</Steps.PrevTrigger>
        <Steps.NextTrigger className={styles.nextTrigger()}>Next</Steps.NextTrigger>
      </div>
    </Steps.Root>
  );
};
