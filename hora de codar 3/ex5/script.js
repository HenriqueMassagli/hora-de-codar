var primeiro_numero = parseInt(prompt("Informe o primeiro número inteiro:"));
var segundo_numero = parseInt(prompt("Informe o segundo número inteiro:"));

var soma = 0;
var contador = 0;

for (var i = primeiro_numero; i <= segundo_numero; i++) {
  soma += i;
  contador++;
}

var media = soma / contador;

alert(
  "A média aritmética dos números entre " +
    primeiro_numero +
    " e " +
    segundo_numero +
    " é: " +
    media
);
