function Pessoa(nome, altura) {
  this.nome = nome;
  this.altura = altura;
}

var pessoas = [];

function cadastrarPessoas() {
  for (var i = 0; i < 15; i++) {
    var nome = prompt(`Informe o nome da pessoa ${i + 1}:`);
    var altura = parseFloat(prompt(`Informe a altura de ${nome} (em metros):`));
    while (isNaN(altura) || altura <= 0) {
      altura = parseFloat(
        prompt(`Altura inválida. Informe a altura de ${nome} (em metros):`)
      );
    }
    pessoas.push(new Pessoa(nome, altura));
  }
  alert("Cadastro concluído.");
}

function apresentarMenoresOuIguais() {
  var resultado = "";
  for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura <= 1.5) {
      resultado += `Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura}m\n`;
    }
  }
  if (resultado === "") {
    alert("Nenhuma pessoa com altura menor ou igual a 1.5m.");
  } else {
    alert(resultado);
  }
}

function apresentarMaioresQue() {
  var resultado = "";
  for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura > 1.5) {
      resultado += `Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura}m\n`;
    }
  }
  if (resultado === "") {
    alert("Nenhuma pessoa com altura maior que 1.5m.");
  } else {
    alert(resultado);
  }
}

function apresentarEntre1_5e2_0() {
  var resultado = "";
  for (var i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura > 1.5 && pessoas[i].altura < 2.0) {
      resultado += `Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura}m\n`;
    }
  }
  if (resultado === "") {
    alert("Nenhuma pessoa com altura entre 1.5m e 2.0m.");
  } else {
    alert(resultado);
  }
}

function calcularMediaAlturas() {
  var soma = 0;
  for (var i = 0; i < pessoas.length; i++) {
    soma += pessoas[i].altura;
  }
  var media = soma / pessoas.length;
  alert(`A média de altura das pessoas cadastradas é: ${media.toFixed(2)}m`);
}

function menu() {
  var opcao = 0;
  do {
    opcao = prompt(
      "Escolha uma opção:\n1. Cadastrar pessoas\n2. Apresentar pessoas <= 1.5m\n3. Apresentar pessoas > 1.5m\n4. Apresentar pessoas entre 1.5m e 2.0m\n5. Calcular média das alturas\n6. Sair"
    );
    switch (opcao) {
      case "1":
        cadastrarPessoas();
        break;
      case "2":
        apresentarMenoresOuIguais();
        break;
      case "3":
        apresentarMaioresQue();
        break;
      case "4":
        apresentarEntre1_5e2_0();
        break;
      case "5":
        calcularMediaAlturas();
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
