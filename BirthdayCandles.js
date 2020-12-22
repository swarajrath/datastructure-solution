function birthdayCandles(candles) {
    var count = 0
    candles.sort((a, b) => {
        return b -a
    })
    for (let i = 0; i < candles.length; i++) {
        if (candles[0]==candles[i]) {
            count++
        }
    }
    return count
}
console.log(birthdayCandles([5,3,2,2,5]))
