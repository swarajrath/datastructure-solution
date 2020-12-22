function rotLeft(a, d) {
var len = a.length

    var result = a.map((e, index)=>{

        var x = index + d
        if (x >= len) {
            x = x - len
        }
        e = a[x]
        return e
    })
    return result
}

console.log(rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10))