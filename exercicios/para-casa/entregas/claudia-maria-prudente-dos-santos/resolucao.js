/*
Exercicio para o lar Semana 8 - Clean Code
Assim que a função for iniciada, um menu deve ser ofertado ao usuário com  a lista de bebidas disponíveis. Ao escolher uma, as principais características devem ser exibidas (Nome, Preço, Marca e Sabor).
O Usuário deve ter a opção de voltar para o menu após a seleção de uma bebida.*/
const menu = [
  {
    id: 1,
    name: "Refrigerante",
    price: 3.5,
    flavour: "Morango",
    brand: "RefriKeylinha",
  },
  {
    id: 2,
    name: "Suco",
    price: 2.5,
    flavour: "Uva",
    brand: "SuquinhoKeylinha",
  },
  {
    id: 3,
    name: "Chá",
    price: 3.0,
    flavour: "Mate",
    brand: "MateKeylinha",
  },
];
function ofertaMenu() {
  const choiceNumber = Number(
    prompt(`Informe o numero que deseja informações:
    1- Refrigerante
    2- Suco
    3- Chá`)
  );

  const itemSelected = menu.find((item) => item.id === choiceNumber);

  alert(`
        Nome: ${itemSelected.name}
        Preço: ${itemSelected.price}
        Sabor: ${itemSelected.flavour}
        Marca: ${itemSelected.brand}`);
}
ofertaMenu();
const isOpenMenu = confirm("Deseja retornar ao menu?");
while (isOpenMenu) {
  ofertaMenu();
}
