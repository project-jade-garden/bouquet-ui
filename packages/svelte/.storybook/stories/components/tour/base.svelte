<script lang="ts">
  import { tourStyles } from "@bouquet-ui/design";
  import { XIcon } from "lucide-svelte";
  import { onMount } from "svelte";
  import { Frame, Tour, useTour } from "../../../../src/lib";

  const styles = tourStyles();
  const tour = useTour({
    steps: [
      {
        type: "dialog",
        id: "step-0",
        title: "Centered tour (no target)",
        description: "This is the center of the world. Ready to start the tour?",
        actions: [{ label: "Next", action: "next" }]
      },
      {
        type: "tooltip",
        id: "step-1",
        title: "Step 1. Welcome",
        description: "To the new world",
        target: () => document.querySelector<HTMLElement>("#step-1"),
        actions: [
          { label: "Prev", action: "prev" },
          { label: "Next", action: "next" }
        ],
        effect({ show, update }) {
          const abort = new AbortController();

          fetch("https://api.github.com/users/octocat", { signal: abort.signal })
            .then((res) => res.json())
            .then((data) => {
              update({ title: data.name });
              show();
            });

          return () => {
            abort.abort();
          };
        }
      },
      {
        type: "tooltip",
        id: "step-2",
        title: "Step 2. Inside a scrollable container",
        description: "Using scrollIntoView(...) rocks!",
        target: () => document.querySelector<HTMLElement>("#step-2"),
        actions: [
          { label: "Prev", action: "prev" },
          { label: "Next", action: "next" }
        ]
      },
      {
        type: "tooltip",
        id: "step-2a",
        title: "Step 2a. Inside an Iframe container",
        description: "It calculates the offset rect correctly. Thanks to floating UI!",
        target: () => {
          const [frameEl] = Array.from(frames);
          return frameEl?.document.querySelector<HTMLElement>("#step-2a");
        },
        actions: [
          { label: "Prev", action: "prev" },
          { label: "Next", action: "next" }
        ]
      },
      {
        type: "tooltip",
        id: "step-3",
        title: "Step 3. Normal scrolling",
        description: "The new world is a great place",
        target: () => document.querySelector<HTMLElement>("#step-3"),
        actions: [
          { label: "Prev", action: "prev" },
          { label: "Next", action: "next" }
        ]
      },
      {
        type: "tooltip",
        id: "step-4",
        title: "Step 4. Close to bottom",
        description: "So nice to see the scrolling works!",
        target: () => document.querySelector<HTMLElement>("#step-4"),
        actions: [
          { label: "Prev", action: "prev" },
          { label: "Next", action: "next" }
        ]
      },
      {
        type: "dialog",
        id: "step-5",
        title: "You're all sorted! (no target)",
        description: "Thanks for trying out the tour. Enjoy the app!",
        actions: [{ label: "Finish", action: "dismiss" }]
      }
    ]
  });

  // Start the tour when the component mounts
  onMount(() => tour().start());
</script>

<main>
  <Tour.Root tour={tour}>
    <Tour.Backdrop class={styles.backdrop()} />
    <Tour.Spotlight class={styles.spotlight()} />
    <Tour.Positioner class={styles.positioner()}>
      <Tour.Content class={styles.content()}>
        <Tour.Arrow class={styles.arrow()}>
          <Tour.ArrowTip class={styles.arrowTip()} />
        </Tour.Arrow>
        <Tour.Title class={styles.title()} />
        <Tour.Description class={styles.description()} />
        <Tour.ProgressText class={styles.progressText()} />
        <Tour.CloseTrigger class={styles.closeTrigger()}>
          <XIcon />
        </Tour.CloseTrigger>
        <Tour.Control class={styles.control()}>
          <Tour.Actions>
            {#snippet children(actions)}
              {#each actions() as action (action.label)}
                <Tour.ActionTrigger class={styles.actionTrigger()} action={action} />
              {/each}
            {/snippet}
          </Tour.Actions>
        </Tour.Control>
      </Tour.Content>
    </Tour.Positioner>
  </Tour.Root>
  <div class="tour">
    <div class="steps__container">
      <h3 id="step-1">Step 1</h3>
      <div class="overflow__container">
        <div class="h-200px"></div>
        <h3 id="step-2">Step 2</h3>
        <div class="h-100px"></div>
      </div>
      <Frame>
        <h1 id="step-2a">Iframe Content</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </p>
      </Frame>
      <h3 id="step-3">Step 3</h3>
      <h3 id="step-4">Step 4</h3>
    </div>
  </div>
</main>
