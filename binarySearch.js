const performance = require('performance')

var x = 1168
var arr = []
for (let i = 0; i < 20000; i++) {
    arr.push(i)    
}

function search(x, array) {

    for (let i = 0; i < array.length; i++) {
        if (i == x) {
            return array.indexOf(i)
        }        
    }
}

var t0 = performance.now()

console.log(search(x, arr))
var t1 = performance.now()

console.log(t1-t0)