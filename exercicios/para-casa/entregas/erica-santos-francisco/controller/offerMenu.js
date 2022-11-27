const readline = require("readline-sync");
const Juice = require("../services/drinks/Juice");
const Soda = require("../services/drinks/Soda");
const Tea = require("../services/drinks/Tea");

console.clear();

const offerMenu = () => {
  console.log(
    `====================== Menu ========================
  1 - List all Juices
  2 - List all Sodas
  3 - List all Teas
  4 - Exit
  Enter 1 to 4 to choose an option:`
  );

  const answer = readline.question();
  console.clear();

  switch (answer) {
    case "1":
      const juices = Juice.juiceList;
      console.table(juices);
      offerMenu();
      break;

    case "2":
      const sodas = Soda.sodaList;
      console.table(sodas);
      offerMenu();
      break;

    case "3":
      const teas = Tea.teaList;
      console.table(teas);
      offerMenu();
      break;

    case "4":
      console.log("Thank you, come back soon!");
      break;

    default:
      console.log("Drink not found");
      offerMenu();
      break;
  }
};

module.exports = offerMenu;
