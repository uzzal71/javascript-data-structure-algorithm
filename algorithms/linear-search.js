function linearSearch(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Big-O = O(n)

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14));
