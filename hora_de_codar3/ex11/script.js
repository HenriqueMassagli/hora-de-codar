var dentroDoIntervalo = 0;
var foraDoIntervalo = 0;

for (var i = 1; i <= 10; i++) {
  var valor = Number(prompt("Informe o valor " + i + ":"));

  if (valor >= 24 && valor <= 42) {
    dentroDoIntervalo++;
  } else {
    foraDoIntervalo++;
  }
}

document.getElementById("resultado").innerHTML =
  "Valores entre 24 e 42: " +
  dentroDoIntervalo +
  "<br>" +
  "Valores fora do intervalo: " +
  foraDoIntervalo;
