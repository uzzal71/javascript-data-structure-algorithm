/**
 1. A set a data structure that can hold a collection of values. The values hoever must be unique
 2. Set can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same set.
 3. Sets are dynamically sized. You don't have to declare the size of a set before creating a new set.
 4. Set do not maintain an insertion order
 5. Sets are interables. They can be used with a for of loop

 Set vs Array: 
 1. Arrays can contain duplicate values whereas Sets connot
 2. Inssertion order is maintained in arrays but it is not the case with sets
 3. Searching and deleting an element in the set is faster compared to arrays
 */
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
set.delete(3);
console.log(set.size);
set.clear();

for (const item of set) {
  console.log(item);
}
