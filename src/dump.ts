/**
 * All 3 channels are expected to be within unsigned integer range of `0..255`.
 * Using a different range, such as a floating point range of `0..1`, will result in unexpected behavior.
 */
export type RGB = {
	r: number,
	g: number,
	b: number
}

export const IDS = [
	1,
	2,
	3,
	5,
	6,
	9,
	11,
	12,
	18,
	21,
	22,
	23,
	24,
	25,
	26,
	27,
	28,
	29,
	36,
	37,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	47,
	48,
	49,
	50,
	100,
	101,
	102,
	103,
	104,
	105,
	106,
	107,
	108,
	110,
	111,
	112,
	113,
	115,
	116,
	118,
	119,
	120,
	121,
	123,
	124,
	125,
	126,
	127,
	128,
	131,
	133,
	134,
	135,
	136,
	137,
	138,
	140,
	141,
	143,
	145,
	146,
	147,
	148,
	149,
	150,
	151,
	153,
	154,
	157,
	158,
	168,
	176,
	178,
	179,
	180,
	190,
	191,
	192,
	193,
	194,
	195,
	196,
	198,
	199,
	200,
	208,
	209,
	210,
	211,
	212,
	213,
	216,
	217,
	218,
	219,
	220,
	221,
	222,
	223,
	224,
	225,
	226,
	232,
	268,
	301,
	302,
	303,
	304,
	305,
	306,
	307,
	308,
	309,
	310,
	311,
	312,
	313,
	314,
	315,
	316,
	317,
	318,
	319,
	320,
	321,
	322,
	323,
	324,
	325,
	327,
	328,
	329,
	330,
	331,
	332,
	333,
	334,
	335,
	336,
	337,
	338,
	339,
	340,
	341,
	342,
	343,
	344,
	345,
	346,
	347,
	348,
	349,
	350,
	351,
	352,
	353,
	354,
	355,
	356,
	357,
	358,
	359,
	360,
	361,
	362,
	363,
	364,
	365,
	1001,
	1002,
	1003,
	1004,
	1005,
	1006,
	1007,
	1008,
	1009,
	1010,
	1011,
	1012,
	1013,
	1014,
	1015,
	1016,
	1017,
	1018,
	1019,
	1020,
	1021,
	1022,
	1023,
	1024,
	1025,
	1026,
	1027,
	1028,
	1029,
	1030,
	1031,
	1032
] as const;

export const NAMES = [
	"White",
	"Grey",
	"Light yellow",
	"Brick yellow",
	"Light green (Mint)",
	"Light reddish violet",
	"Pastel Blue",
	"Light orange brown",
	"Nougat",
	"Bright red",
	"Med. reddish violet",
	"Bright blue",
	"Bright yellow",
	"Earth orange",
	"Black",
	"Dark grey",
	"Dark green",
	"Medium green",
	"Lig. Yellowich orange",
	"Bright green",
	"Dark orange",
	"Light bluish violet",
	"Transparent",
	"Tr. Red",
	"Tr. Lg blue",
	"Tr. Blue",
	"Tr. Yellow",
	"Light blue",
	"Tr. Flu. Reddish orange",
	"Tr. Green",
	"Tr. Flu. Green",
	"Phosph. White",
	"Light red",
	"Medium red",
	"Medium blue",
	"Light grey",
	"Bright violet",
	"Br. yellowish orange",
	"Bright orange",
	"Bright bluish green",
	"Earth yellow",
	"Bright bluish violet",
	"Tr. Brown",
	"Medium bluish violet",
	"Tr. Medi. reddish violet",
	"Med. yellowish green",
	"Med. bluish green",
	"Light bluish green",
	"Br. yellowish green",
	"Lig. yellowish green",
	"Med. yellowish orange",
	"Br. reddish orange",
	"Bright reddish violet",
	"Light orange",
	"Tr. Bright bluish violet",
	"Gold",
	"Dark nougat",
	"Silver",
	"Neon orange",
	"Neon green",
	"Sand blue",
	"Sand violet",
	"Medium orange",
	"Sand yellow",
	"Earth blue",
	"Earth green",
	"Tr. Flu. Blue",
	"Sand blue metallic",
	"Sand violet metallic",
	"Sand yellow metallic",
	"Dark grey metallic",
	"Black metallic",
	"Light grey metallic",
	"Sand green",
	"Sand red",
	"Dark red",
	"Tr. Flu. Yellow",
	"Tr. Flu. Red",
	"Gun metallic",
	"Red flip/flop",
	"Yellow flip/flop",
	"Silver flip/flop",
	"Curry",
	"Fire Yellow",
	"Flame yellowish orange",
	"Reddish brown",
	"Flame reddish orange",
	"Medium stone grey",
	"Royal blue",
	"Dark Royal blue",
	"Bright reddish lilac",
	"Dark stone grey",
	"Lemon metalic",
	"Light stone grey",
	"Dark Curry",
	"Faded green",
	"Turquoise",
	"Light Royal blue",
	"Medium Royal blue",
	"Rust",
	"Brown",
	"Reddish lilac",
	"Lilac",
	"Light lilac",
	"Bright purple",
	"Light purple",
	"Light pink",
	"Light brick yellow",
	"Warm yellowish orange",
	"Cool yellow",
	"Dove blue",
	"Medium lilac",
	"Slime green",
	"Smoky grey",
	"Dark blue",
	"Parsley green",
	"Steel blue",
	"Storm blue",
	"Lapis",
	"Dark indigo",
	"Sea green",
	"Shamrock",
	"Fossil",
	"Mulberry",
	"Forest green",
	"Cadet blue",
	"Electric blue",
	"Eggplant",
	"Moss",
	"Artichoke",
	"Sage green",
	"Ghost grey",
	"Lilac",
	"Plum",
	"Olivine",
	"Laurel green",
	"Quill grey",
	"Crimson",
	"Mint",
	"Baby blue",
	"Carnation pink",
	"Persimmon",
	"Maroon",
	"Gold",
	"Daisy orange",
	"Pearl",
	"Fog",
	"Salmon",
	"Terra Cotta",
	"Cocoa",
	"Wheat",
	"Buttermilk",
	"Mauve",
	"Sunrise",
	"Tawny",
	"Rust",
	"Cashmere",
	"Khaki",
	"Lily white",
	"Seashell",
	"Burgundy",
	"Cork",
	"Burlap",
	"Beige",
	"Oyster",
	"Pine Cone",
	"Fawn brown",
	"Hurricane grey",
	"Cloudy grey",
	"Linen",
	"Copper",
	"Medium brown",
	"Bronze",
	"Flint",
	"Dark taupe",
	"Burnt Sienna",
	"Institutional white",
	"Mid gray",
	"Really black",
	"Really red",
	"Deep orange",
	"Alder",
	"Dusty Rose",
	"Olive",
	"New Yeller",
	"Really blue",
	"Navy blue",
	"Deep blue",
	"Cyan",
	"CGA brown",
	"Magenta",
	"Pink",
	"Deep orange",
	"Teal",
	"Toothpaste",
	"Lime green",
	"Camo",
	"Grime",
	"Lavender",
	"Pastel light blue",
	"Pastel orange",
	"Pastel violet",
	"Pastel blue-green",
	"Pastel green",
	"Pastel yellow",
	"Pastel brown",
	"Royal purple",
	"Hot pink"
] as const;

export const RGBS: RGB[] = [
	{
		"b": 243,
		"g": 243,
		"r": 242
	},
	{
		"b": 162,
		"g": 165,
		"r": 161
	},
	{
		"b": 153,
		"g": 233,
		"r": 249
	},
	{
		"b": 154,
		"g": 197,
		"r": 215
	},
	{
		"b": 184,
		"g": 218,
		"r": 194
	},
	{
		"b": 200,
		"g": 186,
		"r": 232
	},
	{
		"b": 219,
		"g": 187,
		"r": 128
	},
	{
		"b": 66,
		"g": 132,
		"r": 203
	},
	{
		"b": 105,
		"g": 142,
		"r": 204
	},
	{
		"b": 28,
		"g": 40,
		"r": 196
	},
	{
		"b": 160,
		"g": 112,
		"r": 196
	},
	{
		"b": 172,
		"g": 105,
		"r": 13
	},
	{
		"b": 48,
		"g": 205,
		"r": 245
	},
	{
		"b": 50,
		"g": 71,
		"r": 98
	},
	{
		"b": 53,
		"g": 42,
		"r": 27
	},
	{
		"b": 108,
		"g": 110,
		"r": 109
	},
	{
		"b": 71,
		"g": 127,
		"r": 40
	},
	{
		"b": 140,
		"g": 196,
		"r": 161
	},
	{
		"b": 155,
		"g": 207,
		"r": 243
	},
	{
		"b": 75,
		"g": 151,
		"r": 75
	},
	{
		"b": 53,
		"g": 95,
		"r": 160
	},
	{
		"b": 222,
		"g": 202,
		"r": 193
	},
	{
		"b": 236,
		"g": 236,
		"r": 236
	},
	{
		"b": 75,
		"g": 84,
		"r": 205
	},
	{
		"b": 240,
		"g": 223,
		"r": 193
	},
	{
		"b": 232,
		"g": 182,
		"r": 123
	},
	{
		"b": 141,
		"g": 241,
		"r": 247
	},
	{
		"b": 228,
		"g": 210,
		"r": 180
	},
	{
		"b": 108,
		"g": 133,
		"r": 217
	},
	{
		"b": 141,
		"g": 182,
		"r": 132
	},
	{
		"b": 132,
		"g": 241,
		"r": 248
	},
	{
		"b": 222,
		"g": 232,
		"r": 236
	},
	{
		"b": 182,
		"g": 196,
		"r": 238
	},
	{
		"b": 122,
		"g": 134,
		"r": 218
	},
	{
		"b": 202,
		"g": 153,
		"r": 110
	},
	{
		"b": 183,
		"g": 193,
		"r": 199
	},
	{
		"b": 124,
		"g": 50,
		"r": 107
	},
	{
		"b": 64,
		"g": 155,
		"r": 226
	},
	{
		"b": 65,
		"g": 133,
		"r": 218
	},
	{
		"b": 156,
		"g": 143,
		"r": 0
	},
	{
		"b": 67,
		"g": 92,
		"r": 104
	},
	{
		"b": 147,
		"g": 84,
		"r": 67
	},
	{
		"b": 177,
		"g": 183,
		"r": 191
	},
	{
		"b": 172,
		"g": 116,
		"r": 104
	},
	{
		"b": 200,
		"g": 173,
		"r": 229
	},
	{
		"b": 60,
		"g": 210,
		"r": 199
	},
	{
		"b": 175,
		"g": 165,
		"r": 85
	},
	{
		"b": 213,
		"g": 215,
		"r": 183
	},
	{
		"b": 71,
		"g": 189,
		"r": 164
	},
	{
		"b": 167,
		"g": 228,
		"r": 217
	},
	{
		"b": 88,
		"g": 172,
		"r": 231
	},
	{
		"b": 76,
		"g": 111,
		"r": 211
	},
	{
		"b": 120,
		"g": 57,
		"r": 146
	},
	{
		"b": 146,
		"g": 184,
		"r": 234
	},
	{
		"b": 203,
		"g": 165,
		"r": 165
	},
	{
		"b": 129,
		"g": 188,
		"r": 220
	},
	{
		"b": 89,
		"g": 122,
		"r": 174
	},
	{
		"b": 168,
		"g": 163,
		"r": 156
	},
	{
		"b": 61,
		"g": 115,
		"r": 213
	},
	{
		"b": 86,
		"g": 221,
		"r": 216
	},
	{
		"b": 157,
		"g": 134,
		"r": 116
	},
	{
		"b": 144,
		"g": 124,
		"r": 135
	},
	{
		"b": 100,
		"g": 152,
		"r": 224
	},
	{
		"b": 115,
		"g": 138,
		"r": 149
	},
	{
		"b": 86,
		"g": 58,
		"r": 32
	},
	{
		"b": 45,
		"g": 70,
		"r": 39
	},
	{
		"b": 247,
		"g": 226,
		"r": 207
	},
	{
		"b": 161,
		"g": 136,
		"r": 121
	},
	{
		"b": 163,
		"g": 142,
		"r": 149
	},
	{
		"b": 103,
		"g": 135,
		"r": 147
	},
	{
		"b": 87,
		"g": 88,
		"r": 87
	},
	{
		"b": 50,
		"g": 29,
		"r": 22
	},
	{
		"b": 172,
		"g": 173,
		"r": 171
	},
	{
		"b": 130,
		"g": 144,
		"r": 120
	},
	{
		"b": 119,
		"g": 121,
		"r": 149
	},
	{
		"b": 47,
		"g": 46,
		"r": 123
	},
	{
		"b": 123,
		"g": 246,
		"r": 255
	},
	{
		"b": 194,
		"g": 164,
		"r": 225
	},
	{
		"b": 98,
		"g": 108,
		"r": 117
	},
	{
		"b": 91,
		"g": 105,
		"r": 151
	},
	{
		"b": 85,
		"g": 132,
		"r": 180
	},
	{
		"b": 136,
		"g": 135,
		"r": 137
	},
	{
		"b": 75,
		"g": 169,
		"r": 215
	},
	{
		"b": 46,
		"g": 214,
		"r": 249
	},
	{
		"b": 45,
		"g": 171,
		"r": 232
	},
	{
		"b": 40,
		"g": 64,
		"r": 105
	},
	{
		"b": 36,
		"g": 96,
		"r": 207
	},
	{
		"b": 165,
		"g": 162,
		"r": 163
	},
	{
		"b": 164,
		"g": 103,
		"r": 70
	},
	{
		"b": 139,
		"g": 71,
		"r": 35
	},
	{
		"b": 133,
		"g": 66,
		"r": 142
	},
	{
		"b": 98,
		"g": 95,
		"r": 99
	},
	{
		"b": 93,
		"g": 138,
		"r": 130
	},
	{
		"b": 223,
		"g": 228,
		"r": 229
	},
	{
		"b": 68,
		"g": 142,
		"r": 176
	},
	{
		"b": 120,
		"g": 149,
		"r": 112
	},
	{
		"b": 181,
		"g": 181,
		"r": 121
	},
	{
		"b": 233,
		"g": 195,
		"r": 159
	},
	{
		"b": 183,
		"g": 129,
		"r": 108
	},
	{
		"b": 42,
		"g": 76,
		"r": 144
	},
	{
		"b": 70,
		"g": 92,
		"r": 124
	},
	{
		"b": 159,
		"g": 112,
		"r": 150
	},
	{
		"b": 155,
		"g": 98,
		"r": 107
	},
	{
		"b": 206,
		"g": 169,
		"r": 167
	},
	{
		"b": 152,
		"g": 98,
		"r": 205
	},
	{
		"b": 200,
		"g": 173,
		"r": 228
	},
	{
		"b": 149,
		"g": 144,
		"r": 220
	},
	{
		"b": 160,
		"g": 213,
		"r": 240
	},
	{
		"b": 127,
		"g": 184,
		"r": 235
	},
	{
		"b": 141,
		"g": 234,
		"r": 253
	},
	{
		"b": 221,
		"g": 187,
		"r": 125
	},
	{
		"b": 117,
		"g": 43,
		"r": 52
	},
	{
		"b": 84,
		"g": 109,
		"r": 80
	},
	{
		"b": 105,
		"g": 93,
		"r": 91
	},
	{
		"b": 176,
		"g": 16,
		"r": 0
	},
	{
		"b": 29,
		"g": 101,
		"r": 44
	},
	{
		"b": 174,
		"g": 124,
		"r": 82
	},
	{
		"b": 130,
		"g": 88,
		"r": 51
	},
	{
		"b": 220,
		"g": 42,
		"r": 16
	},
	{
		"b": 133,
		"g": 21,
		"r": 61
	},
	{
		"b": 64,
		"g": 142,
		"r": 52
	},
	{
		"b": 76,
		"g": 154,
		"r": 91
	},
	{
		"b": 172,
		"g": 161,
		"r": 159
	},
	{
		"b": 89,
		"g": 34,
		"r": 89
	},
	{
		"b": 29,
		"g": 128,
		"r": 31
	},
	{
		"b": 192,
		"g": 173,
		"r": 159
	},
	{
		"b": 207,
		"g": 137,
		"r": 9
	},
	{
		"b": 123,
		"g": 0,
		"r": 123
	},
	{
		"b": 107,
		"g": 156,
		"r": 124
	},
	{
		"b": 133,
		"g": 171,
		"r": 138
	},
	{
		"b": 177,
		"g": 196,
		"r": 185
	},
	{
		"b": 209,
		"g": 203,
		"r": 202
	},
	{
		"b": 155,
		"g": 94,
		"r": 167
	},
	{
		"b": 123,
		"g": 47,
		"r": 123
	},
	{
		"b": 129,
		"g": 190,
		"r": 148
	},
	{
		"b": 153,
		"g": 189,
		"r": 168
	},
	{
		"b": 222,
		"g": 223,
		"r": 223
	},
	{
		"b": 0,
		"g": 0,
		"r": 151
	},
	{
		"b": 166,
		"g": 229,
		"r": 177
	},
	{
		"b": 219,
		"g": 194,
		"r": 152
	},
	{
		"b": 220,
		"g": 152,
		"r": 255
	},
	{
		"b": 89,
		"g": 89,
		"r": 255
	},
	{
		"b": 0,
		"g": 0,
		"r": 117
	},
	{
		"b": 56,
		"g": 184,
		"r": 239
	},
	{
		"b": 109,
		"g": 217,
		"r": 248
	},
	{
		"b": 236,
		"g": 231,
		"r": 231
	},
	{
		"b": 228,
		"g": 212,
		"r": 199
	},
	{
		"b": 148,
		"g": 148,
		"r": 255
	},
	{
		"b": 98,
		"g": 104,
		"r": 190
	},
	{
		"b": 36,
		"g": 36,
		"r": 86
	},
	{
		"b": 199,
		"g": 231,
		"r": 241
	},
	{
		"b": 187,
		"g": 243,
		"r": 254
	},
	{
		"b": 208,
		"g": 178,
		"r": 224
	},
	{
		"b": 189,
		"g": 144,
		"r": 212
	},
	{
		"b": 85,
		"g": 85,
		"r": 150
	},
	{
		"b": 42,
		"g": 76,
		"r": 143
	},
	{
		"b": 150,
		"g": 190,
		"r": 211
	},
	{
		"b": 188,
		"g": 220,
		"r": 226
	},
	{
		"b": 234,
		"g": 234,
		"r": 237
	},
	{
		"b": 218,
		"g": 218,
		"r": 233
	},
	{
		"b": 62,
		"g": 62,
		"r": 136
	},
	{
		"b": 93,
		"g": 155,
		"r": 188
	},
	{
		"b": 120,
		"g": 172,
		"r": 199
	},
	{
		"b": 163,
		"g": 191,
		"r": 202
	},
	{
		"b": 178,
		"g": 179,
		"r": 187
	},
	{
		"b": 75,
		"g": 88,
		"r": 108
	},
	{
		"b": 79,
		"g": 132,
		"r": 160
	},
	{
		"b": 136,
		"g": 137,
		"r": 149
	},
	{
		"b": 158,
		"g": 168,
		"r": 171
	},
	{
		"b": 131,
		"g": 148,
		"r": 175
	},
	{
		"b": 102,
		"g": 103,
		"r": 150
	},
	{
		"b": 54,
		"g": 66,
		"r": 86
	},
	{
		"b": 63,
		"g": 104,
		"r": 126
	},
	{
		"b": 92,
		"g": 102,
		"r": 105
	},
	{
		"b": 66,
		"g": 76,
		"r": 90
	},
	{
		"b": 9,
		"g": 57,
		"r": 106
	},
	{
		"b": 248,
		"g": 248,
		"r": 248
	},
	{
		"b": 205,
		"g": 205,
		"r": 205
	},
	{
		"b": 17,
		"g": 17,
		"r": 17
	},
	{
		"b": 0,
		"g": 0,
		"r": 255
	},
	{
		"b": 0,
		"g": 176,
		"r": 255
	},
	{
		"b": 255,
		"g": 128,
		"r": 180
	},
	{
		"b": 75,
		"g": 75,
		"r": 163
	},
	{
		"b": 66,
		"g": 190,
		"r": 193
	},
	{
		"b": 0,
		"g": 255,
		"r": 255
	},
	{
		"b": 255,
		"g": 0,
		"r": 0
	},
	{
		"b": 96,
		"g": 32,
		"r": 0
	},
	{
		"b": 185,
		"g": 84,
		"r": 33
	},
	{
		"b": 236,
		"g": 175,
		"r": 4
	},
	{
		"b": 0,
		"g": 85,
		"r": 170
	},
	{
		"b": 170,
		"g": 0,
		"r": 170
	},
	{
		"b": 204,
		"g": 102,
		"r": 255
	},
	{
		"b": 0,
		"g": 175,
		"r": 255
	},
	{
		"b": 212,
		"g": 238,
		"r": 18
	},
	{
		"b": 255,
		"g": 255,
		"r": 0
	},
	{
		"b": 0,
		"g": 255,
		"r": 0
	},
	{
		"b": 21,
		"g": 125,
		"r": 58
	},
	{
		"b": 100,
		"g": 142,
		"r": 127
	},
	{
		"b": 159,
		"g": 91,
		"r": 140
	},
	{
		"b": 255,
		"g": 221,
		"r": 175
	},
	{
		"b": 201,
		"g": 201,
		"r": 255
	},
	{
		"b": 255,
		"g": 167,
		"r": 177
	},
	{
		"b": 233,
		"g": 243,
		"r": 159
	},
	{
		"b": 204,
		"g": 255,
		"r": 204
	},
	{
		"b": 204,
		"g": 255,
		"r": 255
	},
	{
		"b": 153,
		"g": 204,
		"r": 255
	},
	{
		"b": 209,
		"g": 37,
		"r": 98
	},
	{
		"b": 191,
		"g": 0,
		"r": 255
	}
];

export type BrickColorName = typeof NAMES[number];
export type BrickColorID = typeof IDS[number];
