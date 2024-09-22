var saldo = 1000;
var senha = "3589";
var extrato = ["Depósito: R$ 500", "Compra: R$ 200", "Aluguel: R$ 700"];
var nome;

function inicio() {
  nome = prompt("Por favor, insira seu nome:");
  alert("Olá " + nome + ", é um prazer ter você por aqui!");
  menu();
}

function menu() {
  var opcao = prompt(
    "Escolha uma opção:\n1. Saldo\n2. Extrato\n3. Saque\n4. Depósito\n5. Transferência\n6. Sair"
  );

  switch (opcao) {
    case "1":
      acessarSaldo();
      break;
    case "2":
      verExtrato();
      break;
    case "3":
      realizarSaque();
      break;
    case "4":
      realizarDeposito();
      break;
    case "5":
      realizarTransferencia();
      break;
    case "6":
      sair();
      break;
    default:
      erro();
  }
}

function erro() {
  alert("Opção inválida. Tente novamente.");
  menu();
}

function validarSenha(funcaoAtual) {
  var senhaDigitada = prompt("Por favor, insira sua senha:");

  if (senhaDigitada === senha) {
    funcaoAtual();
  } else {
    alert("Senha incorreta. Tente novamente.");
    validarSenha(funcaoAtual);
  }
}

function acessarSaldo() {
  validarSenha(function () {
    alert("Seu saldo atual é: R$ " + saldo);
    menu();
  });
}

function verExtrato() {
  validarSenha(function () {
    alert("Extrato:\n" + extrato.join("\n"));
    menu();
  });
}

function realizarSaque() {
  validarSenha(function () {
    var valorSaque = prompt("Digite o valor para saque:");

    if (valorSaque <= 0 || isNaN(valorSaque)) {
      alert("Operação não autorizada.");
    } else if (valorSaque > saldo) {
      alert("Operação não autorizada. Saldo insuficiente.");
    } else {
      saldo -= Number(valorSaque);
      extrato.push("Saque: R$ " + valorSaque);
      alert("Saque realizado com sucesso! Seu novo saldo é: R$ " + saldo);
    }
    menu();
  });
}

function realizarDeposito() {
  var valorDeposito = prompt("Digite o valor para depósito:");

  if (valorDeposito <= 0 || isNaN(valorDeposito)) {
    alert("Operação não autorizada.");
  } else {
    saldo += Number(valorDeposito);
    extrato.push("Depósito: R$ " + valorDeposito);
    alert("Depósito realizado com sucesso! Seu novo saldo é: R$ " + saldo);
  }
  menu();
}

function realizarTransferencia() {
  validarSenha(function () {
    var conta = prompt("Digite o número da conta para transferência:");

    if (isNaN(conta) || conta.trim() === "") {
      alert("Conta inválida.");
      menu();
      return;
    }

    var valorTransferencia = prompt("Digite o valor para transferência:");

    if (valorTransferencia <= 0 || isNaN(valorTransferencia)) {
      alert("Operação não autorizada.");
    } else if (valorTransferencia > saldo) {
      alert("Operação não autorizada. Saldo insuficiente.");
    } else {
      saldo -= Number(valorTransferencia);
      extrato.push(
        "Transferência: R$ " + valorTransferencia + " para conta " + conta
      );
      alert(
        "Transferência realizada com sucesso! Seu novo saldo é: R$ " + saldo
      );
    }
    menu();
  });
}

function sair() {
  alert(nome + ", foi um prazer ter você por aqui!");
}
