function JumpingOnClouds(c) {
    var step = -1
    
    for (let i = 0; i < c.length; i+= 2) {
        if (c[i]==1 || i == c.length - 2) {
            i--            
        }
        step++
    }
    return step
}

console.log(JumpingOnClouds([0, 0, 0, 1, 0, 0]))
