function filledOrders(order, k) {
    var count = 0
    const numberOfOrders = order[0]
    order.shift()
    var sortOrder = order.sort()
    for (var i = 0; i < order.length; i++) {
        if (sortOrder[i] <= k) {
            count++
            k = k - sortOrder[i]
        } 
    }
    
    return count
}

console.log(filledOrders([3,4,5,6], 3))
