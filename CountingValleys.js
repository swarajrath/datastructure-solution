function countingValleys(steps, path) {
    var x = 0, y=0
    var s = path.split('')
    for (let i = 0; i < steps; i++) {
        if (s[i] == 'U') {
            x += 1
            if (x == 0) {
                y += 1
            }
        } else {
            x -= 1
        }
    }
    return y
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'))