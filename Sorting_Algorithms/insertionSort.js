function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {

        for (let j = i; j > 0; j--) {
            if (array[j] < array[j - 1]) {
                [array[j], array[j - 1]] = [array[j - 1], array[j]]
            } else {
                break
            }
        }
    }
    return array
}

console.log(insertionSort([19, 18, 37, 76, 98, 10, 76, 1, 45, 346, 498, 154, 147, 652, 324, 98747, 1, 2, 520, 745, 325, 1638, 9658, 325, 145, 63, 58, 14, 16, 25, 26, 25, 98, 74, 85, 65, 325, 625, 854, 968]))