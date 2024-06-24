import { IDS, NAMES, RGBS, type RGB, type BrickColorID, type BrickColorName } from "./dump";

export { type RGB, type BrickColorID, type BrickColorName } from "./dump";

/**
 * Returns the distance between RGB color A, and RGB color B
 * using a fast exponentiation algorithm which may not provide the most precise results.
 * However, in most cases, it should not matter that much.
 */
function fastDistRGB(a: RGB, b: RGB) {
	const rr = a.r - b.r;
	const gg = a.g - b.g;
	const bb = a.b - b.b;
	return Math.sqrt(rr*rr + gg*gg + bb*bb);
}

/**
 * Implements the Roblox BrickColor datatype as a class in JavaScript.
 * Please note that this is not a 1:1 replica of Roblox implementation.
 */
export class BrickColor {
	private index: number;

	private constructor(index: number) {
		this.index = index;
	}

	/**
	 * Finds the closest BrickColor to the given RGB color, and returns the `BrickColor` instance.
	 * RGB is accepted within unsigned integer range of `0..255`.
	 * If you have RGB within floating point range `0..1`, multiply it by 255 before feeding it into the function.
	 */
	static fromRGB(rgb: RGB): BrickColor {
		let closestDist = Infinity;
		let closestIndex = 0;
	
		for (let i = 0; i < RGBS.length; i++) {
			const dist = fastDistRGB(rgb, RGBS[i]!);
			if (dist < closestDist) {
				closestDist = dist;
				closestIndex = i;
			}
		}

		return new BrickColor(closestIndex);
	}

	/**
	 * Finds BrickColor by the given name, and returns the `BrickColor` instance if one is found, otherwise `undefined` is returned.
	 */
	static fromName(name: BrickColorName): BrickColor | undefined {
		const index = NAMES.indexOf(name);
		if (index !== -1) {
			return new BrickColor(index);
		}
		return;
	}

	/**
	 * Finds BrickColor by the ID, and returns the `BrickColor` instance if one is found, otherwise `undefiend` is returned.
	 */
	static fromID(id: BrickColorID): BrickColor | undefined {
		const index = IDS.indexOf(id);
		if (index !== -1) {
			return new BrickColor(index);
		}
		return;
	}

	/**
	 * Returns the name of the `BrickColor` instance.
	 */
	toName(): BrickColorName {
		return NAMES[this.index]!;
	}

	/**
	 * Returns the RGB color of the `BrickColor` instance.
	 */
	toRGB(): RGB {
		return RGBS[this.index]!;
	}

	/**
	 * Returns the BrickColor ID of the `BrickColor` instance.
	 */
	toID(): BrickColorID {
		return IDS[this.index]!;
	}
}
