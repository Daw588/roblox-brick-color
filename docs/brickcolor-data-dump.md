You can dump BrickColor data directly from Roblox Studio using this simple Luau script.
```luau
local HttpService = game:GetService("HttpService")

local RGBS = {}
local NAMES = {}
local IDS = {}

for id = 1, 1032 do
	local color = BrickColor.new(id)

	if color.Name == "Medium stone grey" and id ~= 194 then
		continue
	end
	
	local r = math.floor(color.Color.R * 255)
	local g = math.floor(color.Color.G * 255)
	local b = math.floor(color.Color.B * 255)
	
	table.insert(IDS, id)
	table.insert(NAMES, color.Name)
	table.insert(RGBS, { r = r, g = g, b = b })
end

print(HttpService:JSONEncode(IDS))
print(HttpService:JSONEncode(NAMES))
print(HttpService:JSONEncode(RGBS))
```
