//2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO".

function bombaRelogio() {
  var contador = 30;
  var timerElemento = document.getElementById("timer");

  var intervalo = setInterval(function () {
    timerElemento.textContent = contador;
    if (contador === 0) {
      clearInterval(intervalo);
      alert("EXPLOSÃO!");
    }
    contador--;
  }, 1000);
}

bombaRelogio();
