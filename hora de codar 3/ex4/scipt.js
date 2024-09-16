var soma = 0;
var contador = 0;

for (var i = 15; i <= 100; i++) {
  soma += i;
  contador++;
}

var media = soma / contador;
alert("A média aritmética é: " + media);
