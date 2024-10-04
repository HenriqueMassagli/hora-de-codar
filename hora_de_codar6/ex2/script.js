function Aluno(nome, notas) {
  this.nome = nome;
  this.notas = notas;
  this.media = this.calcularMedia();
}

Aluno.prototype.calcularMedia = function () {
  var soma = 0;
  for (var i = 0; i < this.notas.length; i++) {
    soma += this.notas[i];
  }
  return soma / this.notas.length;
};

Aluno.prototype.getResultado = function () {
  return this.media >= 5 ? "Aprovado" : "Reprovado";
};

var alunos = [];

function cadastrarAlunos() {
  for (var i = 0; i < 20; i++) {
    var nome = prompt(`Informe o nome do aluno ${i + 1}:`);
    var notas = [];
    for (var j = 0; j < 4; j++) {
      var nota = parseFloat(
        prompt(`Informe a nota do ${j + 1}º bimestre para o aluno ${nome}:`)
      );

      while (isNaN(nota) || nota < 0 || nota > 10) {
        nota = parseFloat(
          prompt(
            `Nota inválida. Informe a nota do ${
              j + 1
            }º bimestre para o aluno ${nome} (0 a 10):`
          )
        );
      }
      notas.push(nota);
    }
    var aluno = new Aluno(nome, notas);
    alunos.push(aluno);
  }

  alunos.sort(function (a, b) {
    return a.nome.localeCompare(b.nome);
  });
  alert("Alunos cadastrados e classificados por nome com sucesso!");
}

function pesquisarAluno() {
  var nomePesquisa = prompt("Informe o nome do aluno a ser pesquisado:");
  var encontrado = false;
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === nomePesquisa.toLowerCase()) {
      var aluno = alunos[i];
      alert(
        `Nome: ${aluno.nome}\nMédia: ${aluno.media.toFixed(
          2
        )}\nResultado: ${aluno.getResultado()}`
      );
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    alert("Aluno não encontrado.");
  }
}

function apresentarRegistros() {
  if (alunos.length === 0) {
    alert("Nenhum aluno cadastrado.");
    return;
  }

  var resultado = "";
  for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i];
    resultado += `Nome: ${aluno.nome}\nMédia: ${aluno.media.toFixed(
      2
    )}\nResultado: ${aluno.getResultado()}\n\n`;
  }
  alert(resultado);
}

function menu() {
  var opcao = 0;
  do {
    opcao = prompt(
      "Escolha uma opção:\n1. Cadastrar alunos\n2. Pesquisar aluno por nome\n3. Apresentar todos os registros\n4. Sair"
    );
    switch (opcao) {
      case "1":
        cadastrarAlunos();
        break;
      case "2":
        pesquisarAluno();
        break;
      case "3":
        apresentarRegistros();
        break;
      case "4":
        alert("Saindo do programa.");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "4");
}

menu();
