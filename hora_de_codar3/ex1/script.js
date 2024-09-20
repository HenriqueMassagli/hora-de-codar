//Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.

function programa1() {
  var primeiro_valor = Number(prompt("Digite o primeiro número"));
  var segundo_valor = Number(
    prompt("Digite o segundo número (deve ser maior que zero)")
  );

  while (segundo_valor <= 0) {
    segundo_valor = Number(
      prompt("Valor inválido! Digite um número maior que zero:")
    );
  }

  var resultado = primeiro_valor / segundo_valor;

  alert("O resultado da divisão é: " + resultado);
}

programa1();
