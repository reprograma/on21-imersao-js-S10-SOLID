/* Vamos refatorar em sala o projeto Exercicio Semana 8 - Resolução professora . Salve o antigo projeto e identifique as mudanças feitas durante o processo de refatoração. */
// Refatoração de acordo ao que foi sugerido no arquivo - exLarIndicacaoDeRefatoracao.js

const prompt = require("prompt-sync")();

var DrinksMenu = [
    {
        id: 1,
        name: "Refrigerante",
        price: 3.5,
        flavor: "Morango",
        brand: "RefriKeylinha",
    },
    {
        id: 2,
        name: "Suco",
        price: 2.5,
        flavor: "Uva",
        brand: "SuquinhoKeylinha",
    },
    {
        id: 3,
        name: "Chá",
        price: 3.0,
        flavor: "Mate",
        brand: "MateKeylinha",
    },
];

drinksMenuOffer = () => {
    var select = Number(
        prompt(`Informe o numero que deseja informações:
          1- Refrigerante
          2- Suco
          3- Chá`)
    );

    switch (select) {
        case 1:
            alert(`
              Nome: ${DrinksMenu[0].name}
              Preço: ${DrinksMenu[0].price}
              Sabor: ${DrinksMenu[0].flavor}
              Marca: ${DrinksMenu[0].brand}`);
            break;
        case 2:
            alert(`
              Nome: ${DrinksMenu[1].name}
              Preço: ${DrinksMenu[1].price}
              Sabor: ${DrinksMenu[1].flavor}
              Marca: ${DrinksMenu[1].brand}`);
            break;
        case 3:
            alert(`
              Nome: ${DrinksMenu[2].name}
              Preço: ${DrinksMenu[2].price}
              Sabor: ${DrinksMenu[2].flavor}
              Marca: ${DrinksMenu[2].brand}`);
            break;
        default:
            return "Não existe essa opção no Menu de Drinks"
    }
};

drinksMenuOffer();

var retornMenu = confirm("Deseja retornar ao menu?");

while (retornMenu == true) {
    drinksMenuOffer();
}
