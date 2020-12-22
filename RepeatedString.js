function repeatedString(s, n) {

    var count = 0
    var letter = s.split('')
    letter.forEach(e => {
        if (e == 'a') {
            count++
        }
    });

    var times = Math.floor(n / letter.length)
    count = count * times
    var rest = n % letter.length

    for (let i = 0; i < rest; i++) {
        if (s[i] == 'a') {
            count++
        }        
    }
    return count
}

console.log(repeatedString('aba', 10))