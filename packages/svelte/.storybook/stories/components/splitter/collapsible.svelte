<script lang="ts">
  import { splitterStyles } from "@bouquet-ui/design";
  import { Splitter } from "../../../../src/lib";

  const styles = splitterStyles();
</script>

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
