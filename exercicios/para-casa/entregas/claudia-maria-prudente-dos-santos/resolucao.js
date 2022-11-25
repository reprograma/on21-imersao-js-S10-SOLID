// const MenuItem = require("./menuItem");
import { MenuItem } from "./menuItem.js";

const soda = new MenuItem(1, "Refrigerante", 3.5, "Morango", "RefriKeylinha");
const juice = new MenuItem(2, "Suco", 2.5, "Uva", "SuquinhoKeylinha");
const tea = new MenuItem(3, "Chá", 3.0, "Mate", "MateKeylinha");

const menu = [soda, juice, tea];

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
