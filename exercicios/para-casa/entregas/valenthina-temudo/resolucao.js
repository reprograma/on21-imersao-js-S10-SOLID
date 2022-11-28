const Drink = require("./drinks");

const Soda = new Drink(1, "Soda", 3.5, "Strawberry", "SodaKeylinha");
const Juice = new Drink(2, "Juice", 2.5, "Grape", "JuiceKeylinha");
const Tea = new Drink(3, "Tea", 3.0, "Herb Tea", "TeaKeylinha");

function drinkMachine() {
  let choiceDrink = Number(
    prompt(`Choice the number you want information on:
  1- Soda
  2- Juice
  3- Tea`)
  );

  switch (choiceDrink) {
    case 1:
      alert(`
      Name: ${Soda.name}
      Price: ${Soda.price}
      Flavor: ${Soda.flavor}
      Brand: ${Soda.brand}`);
      break;
    case 2:
      alert(`
      Name: ${Juice.name}
      Price: ${Juice.price}
      Flavor: ${Juice.flavor}
      Brand: ${Juice.brand}`);
      break;
    case 3:
      alert(`
      Name: ${Tea.name}
      Price: ${Tea.price}
      Flavor: ${Tea.flavor}
      Brand: ${Tea.brand}`);
      break;
  }
}
drinkMachine();
let backToMenu = confirm("Do you want to return to the menu?");
while (backToMenu == true) {
  drinkMachine();
}
