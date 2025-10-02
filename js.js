
const campoNumero = document.getElementById('campoNumero');
const botaoVerificar = document.getElementById('botaoVerificar');
const resultadoTexto = document.getElementById('resultado');
const resultadoErro = document.getElementById('erro');

function verificarNumero(){

    const valorDigitado = campoNumero.value;
    const numero = parseInt(valorDigitado);

    if (isNaN(numero)) {
        resultadoErro.textContent = "Por favor, digite um número válido.";
        resultadoTexto.textContent = "";
        return; // para a execução aqui se não for um número.
    }

    resultadoErro.textContent = "";

    if (numero % 2 === 0) {
        resultadoTexto.textContent = "O número " + numero + " é PAR!";
    } else {
        resultadoTexto.textContent = "O número " + numero + " é ÍMPAR!";
    }
}

botaoVerificar.addEventListener('click', verificarNumero);

campoNumero.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        verificarNumero();
    }
});




