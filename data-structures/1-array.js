/**
 * An array is a data structure that can hold a collection of values.
 * Array can contain a mix of different data types. You can store strings, booleans, numbers or even object all in the  same array
 * Array are resizable. You don't have to declare the size of an array before creating it.
 * JavaScript array are zero-indexed and the insertion order is maintained
 * Array are iterables. They can be used with a for of loop
 */
const arr = [1, 2, 3, 4, 5, "javascript"];
arr.push(10); // push
arr.unshift(0);
arr.pop(); // remove last element
arr.shift(); // remove first element

for (const item of arr) {
  console.log(item);
}

// map, filter, reduce, concat, slice and splice
/**
 * Array - Big-O time complexity
 * insert / remove from end - O(1)
 * insert / remove from begining - O(n)
 * Access with index - 0(1)
 * Search - O(n)
 * Push / pop - 0(1)
 * Shift / unshift / concat / slice / splice - 0(n)
 * forEach / map / filter / reduce - 0(n)
 * Note: O(1) is constant & O(n) linear
 */
