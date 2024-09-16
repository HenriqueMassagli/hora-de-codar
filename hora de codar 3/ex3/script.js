var i = 10;
var interval = setInterval(function () {
  document.getElementById("contagem").innerText = i;
  i--;

  if (i < 0) {
    clearInterval(interval);
    document.getElementById("contagem").innerText = "";
  }
}, 1000);
