function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
            
        if(target === arr[middle]) return middle;
        else if(arr[middle] < target) left = middle + 1;
        else right = middle - 1;
    }
    
    return -1;
}

console.log(binarySearch([4, 7, 8, 9, 10, 11], 5));

// Big O => O(logn)