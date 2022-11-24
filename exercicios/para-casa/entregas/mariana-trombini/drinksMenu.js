const prompSync = require('prompt-sync')
const { Soda } = require('./Soda')
const { Juice } = require('./Juice')
const { Tea } = require('./Tea')

const prompt = prompSync()

const drinksMenu = () => {
  console.log(`\nEnter the number of the drink you want more information about:
  1- Soda
  2- Juice
  3- Tea
  4- Exit\n`)
  const chosenAnswer = Number(prompt());

  switch (chosenAnswer) {
    case 1:
      const sodasList = Soda.sodas
      console.log(sodasList);
      drinksMenu()
      break;
    case 2:
      const juicesList = Juice.juices
      console.log(juicesList);
      drinksMenu()
      break;
    case 3:
      const teasList = Tea.teas
      console.log(teasList);
      drinksMenu()
      break;
    case 4:
      console.log('Thank you, come back soon!')
      break;
    default:
      console.log('Drink not found!')
      drinksMenu()
      break;
  }
}

module.exports = { drinksMenu }









