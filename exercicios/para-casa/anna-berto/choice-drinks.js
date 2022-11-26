const DrinksMenu = require("./Drinks.js");

const soda = new DrinksMenu(1, "SodaKeylinha", 3.5, "grape", "Grapete");
const juice = new DrinksMenu(2, "JuiceKeylinha", 3.5, "orange", "Dell vale");
const tea = new DrinksMenu(3, "TeaKeylinha", 3.5, "mint", "Dr. Oetker");

option = [soda, juice, tea];

function offerMenuDrinks() {
  let number = Number(
    prompt(`Enter the number you want information:
    1- Soda
    2- Juice
    3- Tea`)
  );

  const drink = option.find((drink) => drink.id === number);
  alert(drink.bio());
}

offerMenuDrinks();
let returnDrinksMenu = confirm("Do you want to return to the menu?");
while (returnDrinksMenu == true) {
  offerMenuDrinks();
}
