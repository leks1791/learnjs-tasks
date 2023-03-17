function calcFactorial(n) {
    return (n != 1) ? n * calcFactorial(n - 1) : 1;
}

console.log(calcFactorial(5)); 