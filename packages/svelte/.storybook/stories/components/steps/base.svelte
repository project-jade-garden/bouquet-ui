<script lang="ts">
  import { stepsStyles } from "@bouquet-ui/design";
  import { Steps } from "../../../../src/lib";

  const items = [
    { value: 'first', title: 'First', description: 'Contact Info' },
    { value: 'second', title: 'Second', description: 'Date & Time' },
    { value: 'third', title: 'Third', description: 'Select Rooms' },
  ];
  const styles = stepsStyles();
</script>

<Steps.Root class={styles.root()} count={items.length}>
  <Steps.List class={styles.list()}>
    {#each items as item, index}
      <Steps.Item class={styles.item()} {index}>
        <Steps.Trigger class={styles.trigger()}>
          <Steps.Indicator class={styles.indicator()}>{index + 1}</Steps.Indicator>
          <span>{item.title}</span>
        </Steps.Trigger>
        <Steps.Separator class={styles.separator()} />
      </Steps.Item>
    {/each}
  </Steps.List>

  {#each items as item, index}
    <Steps.Content class={styles.content()} {index}>
      {item.title} - {item.description}
    </Steps.Content>
  {/each}

  <Steps.CompletedContent>Steps Complete - Thank you for filling out the form!</Steps.CompletedContent>

  <div>
    <Steps.PrevTrigger class={styles.prevTrigger()}>Back</Steps.PrevTrigger>
    <Steps.NextTrigger class={styles.nextTrigger()}>Next</Steps.NextTrigger>
  </div>
</Steps.Root>
