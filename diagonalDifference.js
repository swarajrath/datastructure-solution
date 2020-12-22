function diagonalDifference(...arr) {
    var dimension = parseInt(arr.shift())
    var matrix = []
    var counter = 0

    for (let i = 0; i < dimension; i++) {
        matrix.push([])
    }
    for (let j = 0; j < arr.length; j++) {
        if (j % dimension == 0 && j !=0) {
            counter++
        }
        matrix[counter].push(parseInt(arr[j]))
    }
    console.log(matrix)

    var diag1 = 0, diag2 = 0
    matrix.forEach((e, i) => {
        diag1 += e[i]
        diag2 += e[e.length -i -1]
    });

    console.log(diag1, diag2)
    return Math.abs(diag1 - diag2)
    // for (let i = 0; i < arr.length; i++) {
    //     diag1 += arr[i][i]
    //     diag2 += arr[i][arr.length - i - 1]
    // }

}

console.log(diagonalDifference("4", "11", "2", "4", "4", "5", "6", "10", "8", "-12", "5", "6", "10", "8", "-12",  "11", "2"))