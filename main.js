function factorial(y, z) {
    let result = 1
    for (let y = 2; y <= z ; y++) {
        result *= y;
        
    }
    return result
}
let result = factorial (6, 7)
console.log(result);