/**
 Any object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be any data type

 To rtrieve a value, you can use the the corresponding key. This can be achieved using the dot notation or bracket notation

 An object is not an iterable. You cannot use it a for of loop
 */
const obj = {
  name: "Uzzal",
  age: 25,
  sayName: function () {
    console.log(this.name);
  },
};
obj.hobby = "Criket";
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
obj.sayName();

// Object.keys, .values(), .entries()

/**
 * Object - Big-O time complexity
 * Insert - 0(1)
 * Remove - O(1)
 * Access - O(1)
 * Search - O(n)
 * Object.keys() - O(n)
 * Object.values() - O(n)
 * Object.entries() - O(n)
 */
