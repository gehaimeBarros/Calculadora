var intro = document.getElementById("intro")
var resultado = document.getElementById("resultado")
var operador;

function limpar() {
    intro.value = ""
    window.location.reload();
}

function numero(value) {
    intro.value += value
}

function operacao(value) {
    operador = value;
    intro.value += value
}

function execute(valor1, valor2) {

    var valor1 = Number(valor1)
    var valor2 = Number(valor2)
    if (operador == "+") {
        var result = parseInt(valor1) + parseInt(valor2)
    } else if (operador == "-") {
        var result = parseInt(valor1) - parseInt(valor2)
    } else if (operador == "/") {
        var result = parseInt(valor1) / parseInt(valor2)
    } else if (operador == "x") {
        var result = parseInt(valor1) * parseInt(valor2)
    }
    return result
}

function calcular() {
    const intro = document.getElementById('intro').value;
    const introSplit = intro.split(operador);
    const num1 = introSplit[0];
    const num2 = introSplit[1];

    resultado.innerHTML = execute(num1, num2)
}

function git() {
    window.open("https://github.com/gehaimeBarros", "_blank");
}