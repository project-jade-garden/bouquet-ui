import { tourStyles } from "@bouquet-ui/design";
import type { Meta } from "@storybook/react-vite";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { Frame, Portal, Tour, useTour } from "../../../src";

const meta = {
  title: "Components / Tour"
} satisfies Meta<typeof Base>;

export default meta;

export const Base = () => {
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
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional
  useEffect(() => {
    tour.start();
  }, []);

  return (
    <main>
      <Tour.Root tour={tour}>
        <Portal>
          <Tour.Backdrop className={styles.backdrop()} />
          <Tour.Spotlight className={styles.spotlight()} />
          <Tour.Positioner className={styles.positioner()}>
            <Tour.Content className={styles.content()}>
              <Tour.Arrow className={styles.arrow()}>
                <Tour.ArrowTip className={styles.arrowTip()} />
              </Tour.Arrow>
              <Tour.Title className={styles.title()} />
              <Tour.Description className={styles.description()} />
              <Tour.ProgressText className={styles.progressText()} />
              <Tour.CloseTrigger className={styles.closeTrigger()}>
                <XIcon />
              </Tour.CloseTrigger>
              <Tour.Control className={styles.control()}>
                <Tour.Actions>
                  {(actions) =>
                    actions.map((action) => (
                      <Tour.ActionTrigger className={styles.actionTrigger()} key={action.label} action={action} />
                    ))
                  }
                </Tour.Actions>
              </Tour.Control>
            </Tour.Content>
          </Tour.Positioner>
        </Portal>
      </Tour.Root>
      <div className="tour">
        <div className="steps__container">
          <h3 id="step-1">Step 1</h3>
          <div className="overflow__container">
            <div className="h-200px" />
            <h3 id="step-2">Step 2</h3>
            <div className="h-100px" />
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
  );
};
