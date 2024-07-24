const set = new Set([1, 2, 3, 4]);
set.add(5)
console.log(set);
console.log(set.has(2));
set.delete(3);
console.log(set);
console.log(set.size)

set.forEach(item => console.log(item));
set.clear();
console.log(set);