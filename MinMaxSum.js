function MinMaxSum(arr) {
    var sortedarr = arr.sort()
    var minSum = 0, maxSum = 0
    for (let i = 0; i < arr.length - 1; i++) {
        minSum += sortedarr[i]       
    }
    for (let j = 1; j < arr.length; j++) {
        maxSum += sortedarr[j]       
    }
    console.log(minSum , maxSum)
}

MinMaxSum([1,2,3,4,5])