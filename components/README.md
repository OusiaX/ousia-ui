
# 🎨 Ousia UI - Boilerplate

## 🏗️ Project Structure

```
components/           # React component library
├── src/
│   ├── components/  # UI components directory
│   │   ├── _composite/    # Higher-level components combining primitives
│   │   ├── _typography/   # Text and typography components
│   │   └── [component]/   # Component folder patterns:
│   │       │
│   │       ├── Simple components (badge, card, icon, input, skeleton, table, textarea):
│   │       │   ├── index.ts/tsx    # Main exports
│   │       │   └── [name].tsx      # Component implementation
│   │       │
│   │       └── Complex components with state (dialog, select, date-picker, etc.):
│   │           ├── index.ts/tsx              # Main exports
│   │           ├── [name].ts                 # Type definitions
│   │           ├── [name]-root.tsx           # Root container with state machine
│   │           ├── [name]-root-provider.tsx  # Provider wrapper
│   │           ├── [name]-context.tsx        # Context provider
│   │           ├── use-[name].ts             # Component hooks
│   │           ├── use-[name]-context.ts     # Context hooks
│   │           └── [name]-*.tsx              # Component parts (trigger, content, item, etc.)
│   ├── utils/
│   │   └── create-style-context.ts  # Type-safe context API
│   └── .storybook/    # Storybook configuration
├── styled-system/     # Panda CSS generated files
├── panda.config.ts    # Panda CSS configuration
└── package.json       # Project dependencies and scripts
```

## ✨ Features

- **🚀 State-of-the-art Architecture**: Built on top of Zag.js for robust state management
- **♿ Accessibility First**: All components follow WAI-ARIA guidelines
- **🎨 Styling with Panda CSS**: Type-safe styling with modern CSS-in-JS
- **📦 50+ Components**: Comprehensive collection of UI components
- **📖 Storybook Integration**: Interactive documentation and component playground
- **⚡ Performance Optimized**: Lightweight and tree-shakeable
- **🔧 TypeScript Support**: Full type safety and IntelliSense support

## 🎯 Key Features in Detail

### Accessibility
Every component is built with accessibility in mind:
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Focus management

### State Management with Zag.js
Components use Zag.js for predictable state management:
- Declarative state machines
- Cross-framework compatibility
- Consistent behavior patterns

### Styling with Panda CSS
Modern styling approach:
- Type-safe style props
- Runtime performance optimization
- Theme customization support
- Responsive design utilities
