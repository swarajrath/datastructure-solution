function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        var minIndex = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        const temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }
    return array
}

console.log(selectionSort([19, 18, 37, 76, 98, 10, 76, 1, 45, 346, 498, 154, 147, 652, 324, 98747, 1, 2, 520, 745, 325, 1638, 9658, 325, 145, 63, 58, 14, 16, 25, 26, 25, 98, 74, 85, 65, 325, 625, 854, 968]))

// Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.

// The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.

// This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.