const readline = require("readline-sync");
const Juice = require("./Juice");
const Soda = require("./Soda");
const Tea = require("./Tea");

console.clear();

const drinksMenu = () => {
  console.log(
    ` >>>>>>>> Menu <<<<<<<<
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
      drinksMenu();
      break;

    case "2":
      const sodas = Soda.sodaList;
      console.table(sodas);
      offerMenu();
      break;

    case "3":
      const teas = Tea.teaList;
      console.table(teas);
      drinksMenu();
      break;

    case "4":
      console.log("Thank you, come back soon!");
      break;

    default:
      console.log("Try again! Drink not found.");
      drinksMenu();
      break;
  }
};

module.exports = drinksMenu;