function Pessoa(nome, endereco, telefone) {
    this.nome = nome;
    this.endereco = endereco;
    this.telefone = telefone;
  }
  
  var agenda = [];
  
  function cadastrarRegistros() {
    for (var i = 0; i < 10; i++) {
      var nome = prompt(`Informe o nome da pessoa ${i + 1}:`);
      var endereco = prompt(`Informe o endereço da pessoa ${i + 1}:`);
      var telefone = prompt(`Informe o telefone da pessoa ${i + 1}:`);
      var pessoa = new Pessoa(nome, endereco, telefone);
      agenda.push(pessoa);
    }
    alert("Registros cadastrados com sucesso!");
  }
  
  function pesquisarRegistro() {
    var nomePesquisa = prompt("Informe o nome a ser pesquisado:");
    var encontrado = false;
    for (var i = 0; i < agenda.length; i++) {
      if (agenda[i].nome.toLowerCase() === nomePesquisa.toLowerCase()) {
        alert(
          `Nome: ${agenda[i].nome}\nEndereço: ${agenda[i].endereco}\nTelefone: ${agenda[i].telefone}`
        );
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      alert("Registro não encontrado.");
    }
  }
  
  function classificarRegistros() {
    agenda.sort(function (a, b) {
      return a.nome.localeCompare(b.nome);
    });
    apresentarRegistros();
  }
  
  function apresentarRegistros() {
    if (agenda.length === 0) {
      alert("Nenhum registro encontrado.");
      return;
    }
  
    var resultado = "";
    for (var i = 0; i < agenda.length; i++) {
      resultado += `Nome: ${agenda[i].nome}\nEndereço: ${agenda[i].endereco}\nTelefone: ${agenda[i].telefone}\n\n`;
    }
    alert(resultado);
  }
  
  function menu() {
    var opcao = 0;
    do {
      opcao = prompt(
        "Escolha uma opção:\n1. Cadastrar registros\n2. Pesquisar registro\n3. Classificar registros\n4. Apresentar todos os registros\n5. Sair"
      );
      switch (opcao) {
        case "1":
          cadastrarRegistros();
          break;
        case "2":
          pesquisarRegistro();
          break;
        case "3":
          classificarRegistros();
          break;
        case "4":
          apresentarRegistros();
          break;
        case "5":
          alert("Saindo do programa.");
          break;
        default:
          alert("Opção inválida.");
      }
    } while (opcao !== "5");
  }
  
  menu();
  