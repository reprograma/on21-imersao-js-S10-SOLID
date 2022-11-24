const prompSync = require('prompt-sync')
const { Soda } = require('./soda')
const { Juice } = require('./juice')
const { Tea } = require('./tea')

const prompt = prompSync()

function menuDrinkMachine() {
  console.log(`Enter the number you want information on:
  1 - Soda
  2 - Juice
  3 - Tea
  0 - Exit`)
  var choice = Number(prompt());

  switch (choice) {
    case 1:
      const sodasList = Soda.sodas
      console.log(sodasList);
      menuDrinkMachine()
      break;
    case 2:
      const juiceList = Juice.juices
      console.log(juiceList);
      menuDrinkMachine()
      break;
    case 3:
      const teaList = Tea.teas
      console.log(teaList);
      menuDrinkMachine()
      break;
    case 0:
      console.log('Thank you! See you soon.')
      break;
    default:
      console.log('Invalid choice! Try again')
      menuDrinkMachine()

      break;
  }
}

module.exports = { menuDrinkMachine }