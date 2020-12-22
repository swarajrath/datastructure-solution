function RomanNumber(n) {
    var x = n.split('')
    var output = charInt(x[0])
    var curr, pre

    for (let i = 1; i < x.length; i++) {        

        curr = charInt(x[i])
        pre = charInt(x[i - 1])
        
        if (curr <= pre) {
            output += curr;
        } else {
            output = output - (pre * 2) + curr;
        }
    }

    console.log(output)
}

function charInt(p) {
    switch (p) {
        case 'X':
            value = 10
            break;
        case 'I':
            value = 1
            break;
        case 'V':
            value = 5
            break;
        case 'L':
            value = 50
            break;
        case 'D':
            value = 500
            break;
        case 'M':
            value = 1000
            break;
        case 'C':
            value = 100
            break;
        default:
            break;
    }
    return value
}


RomanNumber('MCMXCIV')