function minimumSwap(arr) {
    var count = 0
    var sorted = arr.slice().sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == sorted[i]) {
            continue
        }
        var p = arr.indexOf(sorted[i])
        arr[i] = arr[i] + arr[p]
        arr[p] = arr[i] - arr[p]
        arr[i] = arr[i] - arr[p]
        // temp = arr[i]
        // arr[i] = arr[p]
        // arr[p] = temp
        console.log(arr)
        //[arr[i], arr[p]] = [arr[p], arr[i]]
        count++
    }
    return count
}

console.log(minimumSwap([1, 3, 5, 2, 4, 6, 7]))