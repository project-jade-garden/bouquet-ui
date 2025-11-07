# @bouquet-ui/design

`@bouquet-ui/design` is an open-source UI library built with [Jade Garden](https://jade-garden.org/), and [Tailwind CSS](https://tailwindcss.com/).
It is designed for building reusable, scalable Design Systems with [Ark UI](https://ark-ui.com/).

## Quick Start

### Installation

Install `@bouquet-ui/design` using your preferred package manager:

```bash
# Using npm
npm install @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using yarn
yarn add @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using pnpm
pnpm add @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite

# Using bun
bun add @bouquet-ui/design jade-garden tailwindcss @tailwindcss/vite
```

### Usage

To get started, have [Tailwind setup](https://tailwindcss.com/docs/installation) in your Vue or Nuxt environment.

Import `@bouquet-ui/design` to the CSS file that imports Tailwind CSS:

```css
@import "tailwindcss";

@source "../node_modules/@bouquet-ui/design";

@import "@bouquet-ui/design/styles";
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
