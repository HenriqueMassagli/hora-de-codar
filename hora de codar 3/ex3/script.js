//3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

var i = 10;
var interval = setInterval(function () {
  document.getElementById("contagem").innerText = i;
  i--;

  if (i < 0) {
    clearInterval(interval);
    document.getElementById("contagem").innerText = "";
  }
}, 1000);
