<script lang="ts">
  import { type RadioGroupStyles, radioGroupStyles } from "@bouquet-ui/design";
  import { RadioGroup } from "../../../../src/lib";

  let { size, ...rest }: RadioGroup.RootProps & RadioGroupStyles.Variants = $props();
  const styles = radioGroupStyles({size});

  const frameworks = ["React", "Solid", "Vue", "Svelte"];
</script>

<RadioGroup.Root {...rest} class={styles.root()}>
  <RadioGroup.Label class={styles.label()}>Framework</RadioGroup.Label>
  {#each frameworks as framework}
    <RadioGroup.Item class={styles.item()} value={framework}>
      <RadioGroup.ItemText class={styles.itemText()}>{framework}</RadioGroup.ItemText>
      <RadioGroup.ItemControl class={styles.itemControl()} />
      <RadioGroup.ItemHiddenInput />
    </RadioGroup.Item>
  {/each}
</RadioGroup.Root>
