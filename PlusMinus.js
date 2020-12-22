function plusMinus(arr) {
    var x = [], y = [], z = []
    var n = arr.length
    arr.forEach(num => {
        if (num > 0) {
            x.push(num)
        } else if (num < 0) {
            y.push(num)
        } else {
            z.push(num)
        }
    });
    console.log((x.length / n).toFixed(6))
    console.log((y.length / n).toFixed(6))
    console.log((z.length / n).toFixed(6))
}

console.log(plusMinus([-2, -1, -3, 0, 1, 2]))