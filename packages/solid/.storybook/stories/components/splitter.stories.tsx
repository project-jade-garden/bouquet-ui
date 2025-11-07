import { splitterStyles } from "@bouquet-ui/design";
import type { Meta } from "storybook-solidjs-vite";
import { Splitter } from "../../../src";

const meta = {
  title: "Components / Splitter"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
  const styles = splitterStyles();

  return (
    <Splitter.Root class={styles.root()} panels={[{ id: "a" }, { id: "b" }]}>
      <Splitter.Panel class={styles.panel()} id="a">
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger class={styles.resizeTrigger()} id="a:b" aria-label="Resize" />
      <Splitter.Panel class={styles.panel()} id="b">
        B
      </Splitter.Panel>
    </Splitter.Root>
  );
};

export const Collapsible = () => {
  const styles = splitterStyles();

  return (
    <Splitter.Root
      class={styles.root()}
      defaultSize={[15, 20]}
      panels={[
        { id: "a", collapsible: true, collapsedSize: 5, minSize: 10, maxSize: 20 },
        { id: "b", minSize: 50 }
      ]}
    >
      <Splitter.Panel class={styles.panel()} id="a">
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger class={styles.resizeTrigger()} id="a:b" aria-label="Resize" />
      <Splitter.Panel class={styles.panel()} id="b">
        B
      </Splitter.Panel>
    </Splitter.Root>
  );
};

export const Vertical = () => {
  const styles = splitterStyles();

  return (
    <Splitter.Root class={styles.root()} orientation="vertical" panels={[{ id: "a" }, { id: "b" }]}>
      <Splitter.Panel class={styles.panel()} id="a">
        A
      </Splitter.Panel>
      <Splitter.ResizeTrigger class={styles.resizeTrigger()} id="a:b" aria-label="Resize" />
      <Splitter.Panel class={styles.panel()} id="b">
        B
      </Splitter.Panel>
    </Splitter.Root>
  );
};
