const fixedListDrinks = [
  {
    id: 1,
    name: "Soda",
    price: 3.5,
    flavor: "Strawberry",
    brand: "SodaKeylinha",
  },
  {
    id: 2,
    name: "Juice",
    price: 2.5,
    flavor: "Grape",
    brand: "JuiceKeylinha",
  },
  {
    id: 3,
    name: "Tea",
    price: 3.0,
    flavor: "Mate",
    brand: "MateKeylinha",
  },
];

function chooseDrink() {
  return Number(
    prompt(`Enter the number you want information on:
        1- Soda
        2- Juice
        3- Tea`)
  );
}

function showSelectedDrink(choose) {
  switch (choose) {
    case 1:
      alert(`
      Name: ${fixedListDrinks[0].name}
      Price: ${fixedListDrinks[0].price}
      Flavor: ${fixedListDrinks[0].flavor}
      Brand: ${fixedListDrinks[0].brand}`);
      break;
    case 2:
      alert(`
      Name: ${fixedListDrinks[1].name}
      Price: ${fixedListDrinks[1].price}
      Flavor: ${fixedListDrinks[1].flavor}
      Brand: ${fixedListDrinks[1].brand}`);
      break;
    case 3:
      alert(`
      Name: ${fixedListDrinks[2].name}
      Price: ${fixedListDrinks[2].price}
      Flavor: ${fixedListDrinks[2].flavor}
      Brand: ${fixedListDrinks[2].brand}`);
      break;
  }
}

function showMenu() {
  showSelectedDrink(chooseDrink());
}

showMenu();

const backToMenu = confirm("Do you want to return to the menu?");
while (backToMenu == true) {
  showMenu();
}
