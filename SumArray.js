function simpleArraySum(ar) {
    var sum = 0
    ar.forEach(i => {
        sum = sum + i
    });
    return sum
}

console.log(simpleArraySum([1,2,3,4,5,6]))