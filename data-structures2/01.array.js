const arr = [2, 3, 4, 5, 6, "Node"];

// insert
console.log("insert from begining:", arr.push("Javascript")); // insert from end: O(1)
console.log("insert from begining:", arr.unshift(1)) // insert from begining: O(n)
console.log(arr);

// remove
console.log("remove from end:", arr.pop()); // remove from end: O(1)
console.log("remove from begining:", arr.shift()); // remove from begining: O(n)
console.log(arr);

// forEach
arr.forEach(item => console.log(item)); // forEach: O(n)

// filter
const newArray = arr.filter((item) => item === 2); // filter: O(n)
console.log(newArray);

// map
arr.map((item) => console.log(item)); // map: O(n)

// concat
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2); // concat: O(n)
console.log(arr3);

// slice
const arr4 = arr.slice(2, 4); // slice: O(n)
console.log(arr4);
console.log(arr);

// splice
const arr5 = arr.splice(0, 2); // splice means remove items & splice: O(n)
console.log(arr5);
console.log(arr);

// reduce
const reductResult = arr3.reduce((previousValue, currentValue) => previousValue + currentValue, 0); // reduce: O(n)
console.log("Total:", reductResult)