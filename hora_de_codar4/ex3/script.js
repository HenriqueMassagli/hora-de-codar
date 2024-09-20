//3-Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

var frutas = ["banana", "uva", "morango", "abacate", "laranja"];

function removerAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removerFruta() {
  while (frutas.length > 0) {
    var frutas_do_usuario = prompt(
      "Digite o nome de uma fruta para remover da lista:"
    );

    var frutas_do_usuarioLower = removerAcentos(
      frutas_do_usuario.toLowerCase()
    );

    var index = frutas
      .map(function (fruta) {
        return removerAcentos(fruta.toLowerCase());
      })
      .indexOf(frutas_do_usuarioLower);

    if (index !== -1) {
      frutas.splice(index, 1);
      alert("Fruta foi retirada da lista.");
    } else {
      alert("Fruta indisponível no nosso mercado.");
    }

    if (frutas.length === 0) {
      alert("Lista de compras finalizada.");
      break;
    }
  }
}
