# Roblox Brick Color

Brick color hurts, doesn't it? This package should ease the pain associated with brick colors. No prescription required.

## Getting Started

Install the package through the package manager of your choice. For this example, I chose NPM.
```bash
npm install @daw588/roblox-brick-color
```

Then just import the package and you're all set.
```ts
import { toRGB, toBrickColorId } from "@daw588/roblox-brick-color";

toRGB(1); // { r: 243, g: 243, b: 243 }
toBrickColorId({ r: 243, g: 243, b: 243 }); // 1
```

## Compatibility

This package has no dependencies, and it will work in any JavaScript environment as long as it supports ES6 module syntax. Types are included, and TypeScript is not required.
