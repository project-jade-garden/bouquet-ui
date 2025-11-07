<script lang="ts">
  import { splitterStyles } from "@bouquet-ui/design";
  import { Splitter } from "../../../../src/lib";

  const styles = splitterStyles();
</script>

<Splitter.Root class={styles.root()} panels={[{ id: "a" }, { id: "b" }]}>
  <Splitter.Panel class={styles.panel()} id="a">
    A
  </Splitter.Panel>
  <Splitter.ResizeTrigger class={styles.resizeTrigger()} id="a:b" aria-label="Resize" />
  <Splitter.Panel class={styles.panel()} id="b">
    B
  </Splitter.Panel>
</Splitter.Root>
