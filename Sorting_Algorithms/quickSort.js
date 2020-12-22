function quickSort(arr) {
    var p = arr[arr.length - 1]
    var left = [], right = []
    if (arr.length === 1) {
        return arr
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= p) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    if (left.length > 0 && right.length > 0) {
        return [...quickSort(left), p, ...quickSort(right)]
    } else if (left.length > 0) {
        return [...quickSort(left), p]
    } else if (right.length > 0) {
        return [p, ...quickSort(right)]
    }
}

console.log(quickSort([19, 18, 37, 76, 98, 10, 76, 1, 45, 346, 498, 154, 147, 652, 324, 98747, 1, 2, 520, 745, 325, 1638, 9658, 325, 145, 63, 58, 14, 16, 25, 26, 25, 98, 74, 85, 65, 325, 625, 854, 968]))
// console.log(quickSort([7,8,1,2,3,4,74]))