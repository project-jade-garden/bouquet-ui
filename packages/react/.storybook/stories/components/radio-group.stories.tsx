import { type RadioGroupStyles, radioGroupStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { RadioGroup } from "../../../src";

const meta = {
  args: {
    disabled: false,
    size: "md"
  },
  argTypes: {
    disabled: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", undefined]
    }
  },
  title: "Components / Radio Group"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = (props: RadioGroup.RootProps & RadioGroupStyles.Variants) => {
  const { size, ...rest } = props;
  const frameworks = ["React", "Solid", "Vue", "Svelte"];
  const styles = radioGroupStyles({ size });

  return (
    <RadioGroup.Root {...rest} className={styles.root()}>
      <RadioGroup.Label className={styles.label()}>Framework</RadioGroup.Label>
      <RadioGroup.Indicator className={styles.indicator()} />
      {frameworks.map((framework) => (
        <RadioGroup.Item className={styles.item()} key={framework} value={framework}>
          <RadioGroup.ItemText className={styles.itemText()}>{framework}</RadioGroup.ItemText>
          <RadioGroup.ItemControl className={styles.itemControl()} />
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
};
