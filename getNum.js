function getNum(N) {
    var M = [];
    for (var i = 0; i < N.length; i++) {
        if (typeof (N[i]) === "number") {
            M.push(N[i]);
        }
    }
    return M
}

console.log(getNum([1, 2, 'Hello', 'World']))