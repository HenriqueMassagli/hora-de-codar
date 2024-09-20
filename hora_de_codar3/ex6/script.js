//6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var alunosAprovados = 0;

function calcularMediaEVerificarAprovacao() {
  var nota1 = Number(prompt("Digite a primeira nota:"));
  var nota2 = Number(prompt("Digite a segunda nota:"));

  // Verifica se as notas são válidas
  if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota2 < 0) {
    alert("Por favor, digite valores válidos para as notas.");
    return;
  }

  var media = (nota1 + nota2) / 2;
  alert("Média final: " + media.toFixed(2));

  if (media >= 9.5) {
    alunosAprovados++;
  }
}

function iniciarPrograma() {
  var continuar = "S";

  while (continuar.toUpperCase() === "S") {
    calcularMediaEVerificarAprovacao();
    continuar = prompt("Calcular a média de outro aluno S/N?");
  }

  alert("Quantidade de alunos aprovados: " + alunosAprovados);
}


window.onload = iniciarPrograma;