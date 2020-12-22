function compareTriplets(a, b) {
    var result = [0,0]
    for (let i = 0; i <= a.length + 1; i++) {
            if (a[i] < b[i]) {
                result[1] += 1
            } 
            if (a[i] > b[i]) {
                result[0] += 1
            }
    }
    return result
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]))