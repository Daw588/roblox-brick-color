import { BRICK_COLOR_MAPPING } from "./dump";

// Prepared ahead of time to avoid unnecessary overhead
// Sadly JavaScript is not like Rust where I could do something like this at compile time
const BRICK_COLOR_ENTRIES = Object.entries(BRICK_COLOR_MAPPING);

export type RGB = {
	r: number,
	g: number,
	b: number
}

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
 * Returns RGB color given the brick color ID. If the given brick color ID is invalid,
 * `undefined` will be returned.
 */
export function toRGB(brickColorId: number): RGB | undefined {
	return BRICK_COLOR_MAPPING[brickColorId.toString() as keyof typeof BRICK_COLOR_MAPPING];
}

/**
 * Finds the closest brick color to the given RGB color, and returns its brick color ID.
 */
export function toBrickColorId(rgbColor: RGB): number {
	let closestDist = Infinity;
	// We know ahead of time that there will be at least 1 item, hence why `undefined` is supressed here
	let closestBrickColorId = BRICK_COLOR_ENTRIES[0]![0];

	for (const [brickColorId, otherColorRGB] of BRICK_COLOR_ENTRIES) {
		const dist = fastDistRGB(rgbColor, otherColorRGB);
		if (dist < closestDist) {
			closestDist = dist;
			closestBrickColorId = brickColorId;
		}
	}

	return parseInt(closestBrickColorId);
}
