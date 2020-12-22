function StarTriangle(num) {
    var output = ''
    for (let i = 1; i <= num; i++) {
        output = ''
        for (let j = 1; j <= num - i; j++) {
            output = output.concat(" ")
        }
        for (let k = 1; k <= i; k++) {
            output = output.concat("* ")
        }
        console.log(output)
    }

}

StarTriangle(10)

