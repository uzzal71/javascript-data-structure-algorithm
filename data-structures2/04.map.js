const map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);
console.log(map);

map.set("d", 4);
console.log(map);

map.delete("c");
console.log(map);

console.log(map.has("a"));
console.log(map.size);

for(const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

console.log(map.get("a"));
console.log(map.keys());
console.log(map.values());

map.clear();
console.log(map);