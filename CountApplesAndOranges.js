function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var appleDistance = apples.map((e) => e + a)
    var orangeDistance = oranges.map((e) => e + b)
    var countA = 0, countO = 0

    appleDistance.forEach(e => {
        if (s <= e && e <= t) {
            countA++
        }
    });

    orangeDistance.forEach(e => {
        if (s <= e && e <= t) {
            countO++
        }
    });
    console.log(countA)
    console.log(countO)
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])