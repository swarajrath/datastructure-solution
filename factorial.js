function extraLongFactorials(n) {
    var bigInt = BigInt(n);
    var fact = 1n;

    for (let i = 0n; i < bigInt ; i++) {
        fact *= bigInt - i;
    }
    
    console.log(fact.toString()) 
}
// console.log(extraLongFactorials(45))