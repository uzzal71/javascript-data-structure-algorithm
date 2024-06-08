function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = numberToInsert;
    }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

/**
 [8, | 20, -2, 4, -6] // numberToInsert=20, arr[8]
 [8, 20, | -2, 4, -6] // numberToInsert=-2, arr[20]
 [8, -2, 20, 4, -6]
 [-2, 8, 20, | 4, -6] // numberToInsert=4, arr[20]
 [-2, 8, 4, | 20, -6]
 [-2, 4, 8, 20, | -6] // numberToInsert=-6, arr[20]
 [-2, 4, 8, -6, 20]
 [-2, 4, -6, 8, 20]
 [-2, -6, 4, 8, 20]
 [-6, -2, 4, 8, 20]
 */