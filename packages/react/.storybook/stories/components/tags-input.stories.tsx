import { tagsInputStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { TagsInput } from "../../../src";

const meta = {
  title: "Components / Tags Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = tagsInputStyles();

  return (
    <TagsInput.Root className={styles.root()}>
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label className={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control className={styles.control()}>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item className={styles.item()} key={index} index={index} value={value}>
                  <TagsInput.ItemPreview className={styles.itemPreview()}>
                    <TagsInput.ItemText className={styles.itemText()}>{value}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger className={styles.itemDeleteTrigger()}>
                      Delete
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput className={styles.itemInput()} />
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input className={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger className={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  );
};

export const DisabledEditing = () => {
  const styles = tagsInputStyles();

  return (
    <TagsInput.Root className={styles.root()} editable={false}>
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label className={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control className={styles.control()}>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item className={styles.item()} key={index} index={index} value={value}>
                  <TagsInput.ItemInput className={styles.itemInput()} />
                  <TagsInput.ItemText className={styles.itemText()}>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger className={styles.itemDeleteTrigger()}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input className={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger className={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  );
};

export const PasteBehavior = () => {
  const styles = tagsInputStyles();

  return (
    <TagsInput.Root className={styles.root()} addOnPaste delimiter=",">
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label className={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control className={styles.control()}>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item className={styles.item()} key={index} index={index} value={value}>
                  <TagsInput.ItemInput className={styles.itemInput()} />
                  <TagsInput.ItemText className={styles.itemText()}>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger className={styles.itemDeleteTrigger()}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input className={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger className={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  );
};

export const Validated = () => {
  const styles = tagsInputStyles();

  return (
    <TagsInput.Root
      className={styles.root()}
      validate={(details) => {
        return !details.value.includes(details.inputValue);
      }}
    >
      <TagsInput.Context>
        {(tagsInput) => (
          <>
            <TagsInput.Label className={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control className={styles.control()}>
              {tagsInput.value.map((value, index) => (
                <TagsInput.Item className={styles.item()} key={index} index={index} value={value}>
                  <TagsInput.ItemInput className={styles.itemInput()} />
                  <TagsInput.ItemText className={styles.itemText()}>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger className={styles.itemDeleteTrigger()}>
                    Delete
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.Item>
              ))}
            </TagsInput.Control>
            <TagsInput.Input className={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger className={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  );
};
