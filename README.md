### `@daw588/roblox-brick-color`

<div>
	<img src="https://img.shields.io/npm/v/%40daw588%2Froblox-brick-color?style=flat&logo=npm&color=0b7dbe"/>
	<img src="https://img.shields.io/github/license/Daw588/roblox-brick-color?style=flat&logo=github&color=0b7dbe"/>
	<img src="https://img.shields.io/github/languages/top/Daw588/roblox-brick-color?style=flat&logo=github&color=0b7dbe"/>
</div>

<br/>

Brick color hurts, doesn't it? This package should ease the pain associated with brick colors. No prescription required.

## Getting Started

Install the package through the package manager of your choice. For this example, I chose NPM.
```bash
npm install @daw588/roblox-brick-color
```

Then just import the package and you're all set.
```ts
import { BrickColor } from "@daw588/roblox-brick-color";

BrickColor.fromID(1); // BrickColor
BrickColor.fromName("White"); // BrickColor
BrickColor.fromRGB({ r: 243, g: 243, b: 243 }); // BrickColor

const whiteBrick = BrickColor.fromID(1); // BrickColor

whiteBrick.toID(); // 1
whiteBrick.toName(); // "White"
whiteBrick.toRGB(); // { r: 243, g: 243, b: 243 }
```

## Compatibility

This package has no dependencies, and it will work in any JavaScript environment as long as it supports ES6 module syntax. Types are included, and TypeScript is not required.
