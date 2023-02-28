let x = +prompt("Введите число")
let n = +prompt("В какую степень возвести?")

if (n < 1) {
	console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
	console.log(pow(x,n))
}

function pow(x, n) {
	return x**n
}
