function getMoneySpent(b, keyboards, drives) {
    var budget = b[0]
    var prices = [] 
    
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            prices.push(keyboards[i]+drives[j])
        }        
    }
    var x = prices.filter((price) => {
        return (price < budget)
    })
    if (x.length == 0) {
        return -1
    } else {
        return Math.max(...x)
    }
}

console.log(getMoneySpent([15, 2, 3], [5, 6], [9, 7, 8]))

