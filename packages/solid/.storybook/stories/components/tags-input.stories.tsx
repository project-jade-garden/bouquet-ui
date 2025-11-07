import { tagsInputStyles } from "@bouquet-ui/design";
import { Index } from "solid-js";
import type { Meta } from "storybook-solidjs-vite";
import { TagsInput } from "../../../src";

const meta = {
  title: "Components / Tags Input"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = tagsInputStyles();

  return (
    <TagsInput.Root class={styles.root()}>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label class={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control class={styles.control()}>
              <Index each={api().value}>
                {(value, index) => (
                  <TagsInput.Item class={styles.item()} index={index} value={value()}>
                    <TagsInput.ItemPreview class={styles.itemPreview()}>
                      <TagsInput.ItemText class={styles.itemText()}>{value()}</TagsInput.ItemText>
                      <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>
                        Delete
                      </TagsInput.ItemDeleteTrigger>
                    </TagsInput.ItemPreview>
                    <TagsInput.ItemInput class={styles.itemInput()} />
                  </TagsInput.Item>
                )}
              </Index>
            </TagsInput.Control>
            <TagsInput.Input class={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger class={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
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
    <TagsInput.Root class={styles.root()} editable={false}>
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label class={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control class={styles.control()}>
              <Index each={api().value}>
                {(value, index) => (
                  <TagsInput.Item class={styles.item()} index={index} value={value()}>
                    <TagsInput.ItemInput class={styles.itemInput()} />
                    <TagsInput.ItemText class={styles.itemText()}>{value()}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>Delete</TagsInput.ItemDeleteTrigger>
                  </TagsInput.Item>
                )}
              </Index>
            </TagsInput.Control>
            <TagsInput.Input class={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger class={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
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
    <TagsInput.Root class={styles.root()} addOnPaste delimiter=",">
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label class={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control class={styles.control()}>
              <Index each={api().value}>
                {(value, index) => (
                  <TagsInput.Item class={styles.item()} index={index} value={value()}>
                    <TagsInput.ItemInput class={styles.itemInput()} />
                    <TagsInput.ItemText class={styles.itemText()}>{value()}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>Delete</TagsInput.ItemDeleteTrigger>
                  </TagsInput.Item>
                )}
              </Index>
            </TagsInput.Control>
            <TagsInput.Input class={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger class={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
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
      class={styles.root()}
      validate={(details) => {
        return !details.value.includes(details.inputValue);
      }}
    >
      <TagsInput.Context>
        {(api) => (
          <>
            <TagsInput.Label class={styles.label()}>Frameworks</TagsInput.Label>
            <TagsInput.Control class={styles.control()}>
              <Index each={api().value}>
                {(value, index) => (
                  <TagsInput.Item class={styles.item()} index={index} value={value()}>
                    <TagsInput.ItemInput class={styles.itemInput()} />
                    <TagsInput.ItemText class={styles.itemText()}>{value()}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger class={styles.itemDeleteTrigger()}>Delete</TagsInput.ItemDeleteTrigger>
                  </TagsInput.Item>
                )}
              </Index>
            </TagsInput.Control>
            <TagsInput.Input class={styles.input()} placeholder="Add Framework" />
            <TagsInput.ClearTrigger class={styles.clearTrigger()}>Clear all</TagsInput.ClearTrigger>
          </>
        )}
      </TagsInput.Context>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  );
};
