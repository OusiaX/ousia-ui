# Ousia UI

Park UI for React

## Overview

Design System featuring flattened dependencies and per-component customization. Built by restructuring Park UI (Zag.js + Panda CSS). Forked and extended from Ark UI, focusing on developer experience and type safety.

## Project Structure

```
ousia-ui/
├── components/           # React component boilerplate
│   ├── src/
│   │   ├── components/  # UI components
│   │   │   ├── _composite/    # Composite components based on the others
│   │   │   ├── _typography/   # Typography components
│   │   │   ├── avatar/        # Individual component directories
│   │   │   ├── checkbox/
│   │   │   └── ...           # Over 50 components
│   │   └── utils/create-style-context.ts  # Type-Safe Context API
│   └── styled-system/   # Panda CSS generation file
│
└── packages/
    ├── ark/            # Ark UI fork (Zag.js wrapper)
    │   └── src/
    │       ├── providers/    # Context providers
    │       └── utils/        # Helper utilities
    │
    └── preset/         # Panda CSS Preset
        └── packages/
            ├── cli/          # CLI Tool (Planned)
            ├── preset/       # Design System Preset
            └── styled-system/# Style System
```

## Setup Guide
### Step 1. Prerequisite
Before you start, ensure that your Panda project is set up and ready to go. If not, please refer to the
[Panda CSS Getting Started Guide](https://panda-css.com/docs/overview/getting-started#framework-guides) and once you've
completed that, come back to this guide.

### Step 2. Install @ousia-ui/ark
The first step is to install Ousia-ui/ark forked and extended from Ark UI. [Ark UI](https://ark-ui.com) is a headless component library that forms the
foundation for most components. To install Ark UI, execute the following command in your project's root directory:

```bash multi
npm install @ousia-ui/ark
```

### Step 3. Install the Panda Presets
The next package you'll need is `@ousia-ui/preset`. It extends the Panda Base Preset with advanced color options and opinionated design tokens.

```bash
npm install @ousia-ui/preset -D
```

Next, update your Panda config file to include the preset and set your preferred `jsxFramework`, as shown below:

```tsx multi
import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@ousia-ui/preset";
import neutral from "@ousia-ui/preset/colors/neutral";
import { recipes } from "~/theme/recipes";
import { slotRecipes } from "~/theme/slotRecipes";

export default defineConfig({
  preflight: true,
  importMap: "styled-system",
  presets: [
    "@pandacss/preset-base",
    createPreset({
      accentColor: neutral,
      grayColor: neutral,
      radius: "sm",
    }),
  ],
  theme: {
    extend: {
      recipes,
      slotRecipes,
    },
  },
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
});

```

> Don't forget to run `panda codegen` after updating your configuration

### Step 4. Path Aliases
To simplify integrating code snippets without changing import statements, set up path aliases by modifying your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    },
    "jsx": "preserve",
    "jsxImportSource": "react",
  },
  "include": ["src", "panda.config.ts", "styled-system"]
}
```

If you are using [Vite](https://vitejs.dev/), it is necessary to include the `vite-tsconfig-paths` plugin in your config file:

```ts
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths({ root: './' })],
})
```

### Step 5. Add your first component (Planned)
Since the CLI is not yet complete, please clone or copy and paste the [boilerplate](https://github.com/OusiaX/ousia-ui/blob/main/components) for use.

## Acknowledgement
- [Park UI](https://park-ui.com) - Original Project
- [Park UI Acknowledgement Details](https://park-ui.com/docs/overview/about)

## License

MIT License © 2025-Present