//7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário.

var quantidade_de_notas = 6;
var soma_das_notas = 0;

for (var i = 0; i < quantidade_de_notas; i++) {
  var nota;

  do {
    nota = Number(prompt("Digite a nota " + (i + 1) + " (entre 0 e 10):"));
    if (nota < 0 || nota > 10) {
      alert("Nota inválida! Por favor, insira um valor entre 0 e 10.");
    }
  } while (nota < 0 || nota > 10);

  soma_das_notas += nota;
}

var media = soma_das_notas / quantidade_de_notas;

alert("A média das notas é: " + media.toFixed(2));
