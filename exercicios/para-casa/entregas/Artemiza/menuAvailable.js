const promptSync = require("prompt-sync");

const Soda = require("./Soda");
const Juice = require("./Juice");
const Tea = require("./Tea");

const prompt = promptSync();

function menuAvailable() {
  console.log(`Select the desired number: 
    1 - Soda
    2 - Juice
    3 - Tea`);
  var select = Number(prompt());

  switch (select) {
    case 1:
      const sodasList = Soda.sodas;
      console.log(sodasList);
      menuAvailable();
      break;
    case 2:
      const juiceList = Juice.juices;
      console.log(juiceList);
      menuAvailable();
      break;
    case 3:
      const teaList = Tea.teas;
      console.log(teaList);
      menuAvailable();
      break;
    case 0:
      console.log("Check back often");
      break;
    default:
      console.log("Invalid option");
      menuAvailable();

      break;
  }
}

module.exports = menuAvailable;
