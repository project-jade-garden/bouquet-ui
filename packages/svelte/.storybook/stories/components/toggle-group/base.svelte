<script lang="ts">
  import { toggleGroupStyles } from "@bouquet-ui/design";
  import { ToggleGroup } from "../../../../src/lib";

  const styles = toggleGroupStyles();
</script>

<ToggleGroup.Root class={styles.root()} defaultValue={["b"]} multiple>
  <ToggleGroup.Item class={styles.item()} value="a">
    A
  </ToggleGroup.Item>
  <ToggleGroup.Item class={styles.item()} value="b">
    B
  </ToggleGroup.Item>
  <ToggleGroup.Item class={styles.item()} value="c">
    C
  </ToggleGroup.Item>
</ToggleGroup.Root>
