function linearSearch(arr, target) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === target) return index;
    }

    return -1;
}

console.log(linearSearch([4, 8, 9, 5, 7], 5));

// Big O => O(n)