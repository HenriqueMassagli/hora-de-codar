//8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. (N  é um valor informado pelo usuário)

var N = Number(prompt("Por favor, insira um número maior que zero:"));

if (N > 0) {
  var resultado = "";

  for (var i = 1; i <= N; i++) {
    resultado += i + " ";
  }

  document.getElementById("resultado").innerHTML = resultado;
} else {
  alert("Por favor, digite um número maior que 0.");
}
