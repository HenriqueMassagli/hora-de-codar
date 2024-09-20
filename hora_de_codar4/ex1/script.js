//1-Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.

var estudantes = [];

while (true) {
  var nome = prompt(
    "Digite o nome do estudante (ou digite 'Pare' para encerrar):"
  );

  if (nome.toUpperCase() === "PARE") {
    break;
  }

  estudantes.push(nome);
}

var resultado =
  "Quantidade de estudantes cadastrados: " +
  estudantes.length +
  "\n\n" +
  "Lista de estudantes:\n" +
  estudantes.join("\n");

alert(resultado);
