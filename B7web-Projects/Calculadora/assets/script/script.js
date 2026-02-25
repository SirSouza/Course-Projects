const display = document.getElementById("display");
const resultdiv = document.querySelector(".resultContainer");

let primeiroNumero = "";
let operador = "";
let segundoNumero = "";

function digitar(valor) {
	if (display.textContent === "0") {
		display.textContent = valor;
	} else {
		display.textContent += valor;
	}
}

function calcular() {
	let operadores = ["+", "-", "x", "÷", "√", "%"];
	for (let op of operadores) {
		if (display.textContent.includes(op)) {
			operador = op;
		}
	}

	let numeros = display.textContent.split(operador);
	primeiroNumero = parseFloat(numeros[0]);
	segundoNumero = parseFloat(numeros[1]);
	let resultado;

	switch (operador) {
		case "+":
			resultado = primeiroNumero + segundoNumero;
			break;
		case "-":
			resultado = primeiroNumero - segundoNumero;
			break;
		case "x":
			resultado = primeiroNumero * segundoNumero;
			break;
		case "÷":
			resultado = primeiroNumero / segundoNumero;
			break;
		case "√":
			resultado = Math.sqrt(primeiroNumero);
			break;
		case "%":
			resultado = (primeiroNumero / 100) * segundoNumero;
			break;
	}

	resultdiv.textContent = resultado;
}

function limpar() {
	display.textContent = "0";
	resultdiv.textContent = "";
}
