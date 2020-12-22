//recursive
const mergeSorting = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    middleIndex = Math.floor(arr.length / 2)
    var left = arr.slice(0, middleIndex)
    var right = arr.slice(middleIndex)

    return merge(mergeSorting(left), mergeSorting(right))
}


//leftArray and rightArray should be sorted
const merge = (leftArray, rightArray) => {
    const output = []
    let leftIndex = 0, rightIndex = 0
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        const leftEl = leftArray[leftIndex]
        const rightEl = rightArray[rightIndex]

        if (leftEl < rightEl) {
            output.push(leftEl)
            leftIndex++
        } else {
            output.push(rightEl)
            rightIndex++
        }
    }
    return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)]
}


console.log(mergeSorting([19, 18, 37, 76, 98, 10, 76, 1, 45, 346, 498, 154, 147, 652, 324, 98747, 1, 2, 520, 745, 325, 1638, 9658, 325, 145, 63, 58, 14, 16, 25, 26, 25, 98, 74, 85, 65, 325, 625, 854, 968]))
