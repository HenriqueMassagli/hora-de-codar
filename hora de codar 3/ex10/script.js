//10 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

var N = Number(prompt("Por favor, insira um número maior que zero:"));

if (N > 0) {
  var resultado = "";

  for (var i = 1; i <= N; i++) {
    resultado +=
      "<div class='tabuada'><strong>Tabuada de " + i + ":</strong><br>";

    for (var j = 1; j <= 10; j++) {
      resultado += i + " x " + j + " = " + i * j + "<br>";
    }

    resultado += "</div>";
  }

  document.getElementById("resultado").innerHTML = resultado;
} else {
  document.getElementById("resultado").innerHTML =
    "Por favor, insira um número válido maior que zero.";
}
