/**
 1. A map is an unordered collection of key-value pairs. Both keys and values can be of any data type
 2. To retrieve a value, your can use the corresponding key
 3. Maps are dynamically sized. You don't have to declare the size of a map before creating a new map.
 4. Map do not maintain an insertion order
 5. Maps are interables. They can be used with a for of loop

 Map vs Object:
 1. Object are unordered where maps ordered
 2. Keys in objects can only be string on symbol type whereas in maps, the can be any type
 3. An object has a prototype and many contain a few default keys which many collide with your own key if you're not careful. A map on the other hand does not contain any keys by default.
 4. Objects are not interables where maps are interable
 5. The number of items in an object must be determind manually where as it is readily available with the size property in a map.
 6. Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data
 */
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
map.set("d", 4);
map.delete("c");
console.log(map.has("a"));
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
