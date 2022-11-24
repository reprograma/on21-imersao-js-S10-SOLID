const prompt = require("prompt-sync")({ sigint: true });

class Menu {
  itemList = null;
  constructor(...itemList) {
    this.itemList = itemList;
  }

  getDrinkId(id) {
    return this.itemList.filter((item) => item.id == id);
  }

  menu() {
    let choice = prompt(
      "Enter the number of drinks options:| 1- Soda | 2- Juice  | 3- Tea : "
    );
    let item = this.getDrinkId(choice);
    return item;
  }

  render() {
    let option;
    do {
      this.menu();
      option = prompt("Do you want to go back to the menu? Enter Y ou N:  ").toUpperCase();
      if (option != "Y" && option != "N") {
        return "You entered invalid option! ", option;
      }
    } while (option == "Y");
  }
}

module.exports = Menu;
