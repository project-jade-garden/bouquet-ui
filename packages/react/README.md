# @bouquet-ui/react

`@bouquet-ui/react` is an open-source UI library built with [Ark UI](https://ark-ui.com/), [Jade Garden](https://jade-garden.org/), and [Tailwind CSS](https://tailwindcss.com/).
It is designed for building reusable, scalable Design Systems with [React](https://react.dev/).

## Quick Start

### Installation

Install `@bouquet-ui/react` using your preferred package manager:

```bash
# Using npm
npm install @bouquet-ui/react @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using yarn
yarn add @bouquet-ui/react @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using pnpm
pnpm add @bouquet-ui/react @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using bun
bun add @bouquet-ui/react @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite
```

### Usage

To get started, have [Tailwind setup](https://tailwindcss.com/docs/installation) in your React environment.

Import `@bouquet-ui/design` to the CSS file that imports Tailwind CSS:

```css
@import "tailwindcss";

@source "../node_modules/@bouquet-ui/design";

@import "@bouquet-ui/design/styles";
```

To use a component from `@bouquet-ui/react`, import it, and style it with `@bouquet-ui/design`:

```tsx
import { type TabsStyles, tabsStyles } from "@bouquet-ui/design";
import { Tabs } from "@bouquet-ui/react";

export const ControlledTabs = (props: TabsStyles.Variants) => {
  const styles = tabsStyles(props);

  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte" },
    { id: "vue", label: "Vue" }
  ];

  return (
    <Tabs.Root className={styles.root()}>
      <Tabs.List className={styles.list()}>
        {options.map((option) => (
          <Tabs.Trigger key={option.id} className={styles.trigger()} value={option.id}>
            {option.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator className={styles.indicator()} />
      </Tabs.List>
      {options.map((option) => (
        <Tabs.Content key={option.id} className={styles.content()} value={option.id}>
          {option.label} Content
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
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
