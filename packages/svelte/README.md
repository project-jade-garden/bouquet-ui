# @bouquet-ui/svelte

`@bouquet-ui/svelte` is an open-source UI library built with [Ark UI](https://ark-ui.com/), [Jade Garden](https://jade-garden.org/), and [Tailwind CSS](https://tailwindcss.com/).
It is designed for building reusable, scalable Design Systems with [Svelte](https://svelte.dev/).


## Quick Start

### Installation

Install `@bouquet-ui/svelte` using your preferred package manager:

```bash
# Using npm
npm install @bouquet-ui/svelte @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using yarn
yarn add @bouquet-ui/svelte @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using pnpm
pnpm add @bouquet-ui/svelte @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using bun
bun add @bouquet-ui/svelte @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite
```

### Usage

To get started, have [Tailwind setup](https://tailwindcss.com/docs/installation) in your Svelte or SvelteKit environment.

Import `@bouquet-ui/design` to the CSS file that imports Tailwind CSS:

```css
@import "tailwindcss";

@source "../node_modules/@bouquet-ui/design";

@import "@bouquet-ui/design/styles";
```

To use a component from `@bouquet-ui/svelte`, import it, and style it with `@bouquet-ui/design`:

```svelte
<script lang="ts">
  import { type TabsStyles, tabsStyles } from "@bouquet-ui/design";
  import { Tabs } from "@bouquet-ui/svelte";

  let props: TabsStyles.Variants = $props();
  const styles = tabsStyles(props);

  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte" },
    { id: "vue", label: "Vue" }
  ];
</script>

<Tabs.Root class={styles.root()}>
  <Tabs.List class={styles.list()}>
    {#each options as option (option.id)}
      <Tabs.Trigger class={styles.trigger()} value={option.id} disabled={option.id === "svelte"}>
        {option.label}
      </Tabs.Trigger>
    {/each}
    <Tabs.Indicator class={styles.indicator()} />
  </Tabs.List>
  {#each options as option (option.id)}
    <Tabs.Content class={styles.content()} value={option.id}>
      {option.label} Content
    </Tabs.Content>
  {/each}
</Tabs.Root>
```

## Advanced

If you are struggling to override the class names from `@bouquet-ui/design`, you can export the Jade Garden configurations with `@jade-garden/cli`:

```bash
# Using npx
npx @jade-garden/cli

# Using pnpx
pnpx @jade-garden/cli

# Using bunx
bunx @jade-garden/cli
```

Just import the styles you would like to write over, and make it yours:

```ts
// jade-garden.config.ts
import { styles, metaConfig } from "@bouquet-ui/design";
import type { Config } from "@jade-garden/cli";

export default {
  components: styles,
  metaConfig
  outDir: "./design"
} satisfies Config;
```
