class SupplyStock {
  constructor(id, name, price, flavor, brand) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.flavor = flavor;
    this.brand = brand;
  }
}

const soda = new SupplyStock(1, "Soda", 3.5, "Strawberry", "RefriKeylinha");
const juice = new SupplyStock(2, "Suco", 2.5, "Grape", "SuquinhoKeylinha");
const tea = new SupplyStock(3, "Tea", 3.0, "Herb Tea", "MateKeylinha");

let fixedMenu = [soda, juice, tea];

showMenu = () => {
  let drinkSelected = Number(
    prompt(`Enter the number you wnat information:
    1- Soda
    2- Suco
    3- Tea`)
  );
  showInfo(drinkSelected);
};

showInfo = (drinkSelected) => {
  alert(`
            Name: ${fixedMenu[drinkSelected - 1].name}
            Price: ${fixedMenu[drinkSelected - 1].price}
            Flavor: ${fixedMenu[drinkSelected - 1].flavor}
            Brand: ${fixedMenu[drinkSelected - 1].brand}`);

  returnMenu();
};

returnMenu = () => {
  let backToMenu = confirm("Would you like to return to the menu?");
  while (backToMenu == true) {
    showMenu();
  }
};

showMenu();
