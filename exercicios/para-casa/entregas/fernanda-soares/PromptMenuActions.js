import DrinkBio from "./DrinkBio";
import DrinkOperations from "./DrinkOperations";

export default class PromptMenuActions {
  setDrinkMenu() {
    const drinkList = new DrinkOperations().drinkList;
    let drinkMenu = "";

    drinkList.array.forEach((drink) => {
      drinkMenu += `\n ${drink.id} - ${drink.nome}`;
    });

    return drinkMenu;
  }

  openMenu() {
    const drinkBio = new DrinkBio();
    const drinkMenu = setDrinkMenu();

    let userChoice = Number(
      prompt("Informe o numero que deseja informações:" + drinkMenu)
    );

    alert(drinkBio.formatDrinkBio(userChoice));

    retornaAoMenu();
  }

  returnToMenu() {
    let returnMenu = confirm("Deseja retornar ao menu?");
    if (returnMenu == true) {
      this.openMenu();
    } else return false;
  }
}
