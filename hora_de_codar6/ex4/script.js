function Funcionario(matricula, nome, salario) {
  this.matricula = matricula;
  this.nome = nome;
  this.salario = salario;
}

var funcionarios = [];

function cadastrarFuncionarios() {
  for (var i = 0; i < 20; i++) {
    var matricula = parseInt(
      prompt(`Informe a matrícula do funcionário ${i + 1}:`)
    );
    var nome = prompt(`Informe o nome do funcionário ${matricula}:`);
    var salario = parseFloat(prompt(`Informe o salário de ${nome}:`));

    while (isNaN(matricula) || isNaN(salario) || salario <= 0) {
      matricula = parseInt(
        prompt(
          `Matrícula ou salário inválido. Informe novamente a matrícula e o salário.`
        )
      );
      salario = parseFloat(prompt(`Informe o salário de ${nome}:`));
    }

    funcionarios.push(new Funcionario(matricula, nome, salario));
  }

  funcionarios.sort(function (a, b) {
    return a.matricula - b.matricula;
  });

  alert("Funcionários cadastrados e classificados por matrícula com sucesso!");
}

function pesquisarFuncionario() {
  var matriculaPesquisa = parseInt(
    prompt("Informe a matrícula do funcionário a ser pesquisado:")
  );
  var encontrado = false;

  for (var i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].matricula === matriculaPesquisa) {
      var funcionario = funcionarios[i];
      alert(
        `Matrícula: ${funcionario.matricula}\nNome: ${
          funcionario.nome
        }\nSalário: R$ ${funcionario.salario.toFixed(2)}`
      );
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    alert("Funcionário não encontrado.");
  }
}

function apresentarSalariosAcimaDe1000() {
  var resultado = "";

  for (var i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].salario > 1000) {
      resultado += `Matrícula: ${funcionarios[i].matricula}, Nome: ${
        funcionarios[i].nome
      }, Salário: R$ ${funcionarios[i].salario.toFixed(2)}\n`;
    }
  }

  if (resultado === "") {
    alert("Nenhum funcionário recebe salário acima de R$1.000,00.");
  } else {
    alert(resultado);
  }
}

function apresentarSalariosAbaixoDe1000() {
  var resultado = "";

  for (var i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].salario < 1000) {
      resultado += `Matrícula: ${funcionarios[i].matricula}, Nome: ${
        funcionarios[i].nome
      }, Salário: R$ ${funcionarios[i].salario.toFixed(2)}\n`;
    }
  }

  if (resultado === "") {
    alert("Nenhum funcionário recebe salário abaixo de R$1.000,00.");
  } else {
    alert(resultado);
  }
}

function apresentarSalariosIguaisA1000() {
  var resultado = "";

  for (var i = 0; i < funcionarios.length; i++) {
    if (funcionarios[i].salario === 1000) {
      resultado += `Matrícula: ${funcionarios[i].matricula}, Nome: ${
        funcionarios[i].nome
      }, Salário: R$ ${funcionarios[i].salario.toFixed(2)}\n`;
    }
  }

  if (resultado === "") {
    alert("Nenhum funcionário recebe salário igual a R$1.000,00.");
  } else {
    alert(resultado);
  }
}

function menu() {
  var opcao = 0;
  do {
    opcao = prompt(
      "Escolha uma opção:\n1. Cadastrar funcionários\n2. Pesquisar funcionário por matrícula\n3. Apresentar salários acima de R$1.000,00\n4. Apresentar salários abaixo de R$1.000,00\n5. Apresentar salários iguais a R$1.000,00\n6. Sair"
    );
    switch (opcao) {
      case "1":
        cadastrarFuncionarios();
        break;
      case "2":
        pesquisarFuncionario();
        break;
      case "3":
        apresentarSalariosAcimaDe1000();
        break;
      case "4":
        apresentarSalariosAbaixoDe1000();
        break;
      case "5":
        apresentarSalariosIguaisA1000();
        break;
      case "6":
        alert("Saindo do programa.");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (opcao !== "6");
}

menu();
