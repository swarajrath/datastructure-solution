function pairsInArray(n, ar) {
    var pairs = 0
    var obj = {}

    ar.forEach(index => {
        if (obj[index]) {
            pairs = pairs + 1
            obj[index] = 0
        } else {
            obj[index] = 1
        }
    });

    return pairs
    
}

console.log(pairsInArray(9, [10, 10, 20, 20, 30, 30, 11, 12, 13, 10, 10]))