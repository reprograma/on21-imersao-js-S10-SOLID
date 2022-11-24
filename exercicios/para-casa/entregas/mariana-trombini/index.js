
const { Soda } = require('./Soda.js')
const { Juice } = require('./Juice.js')
const { Tea } = require('./Tea.js')
const { drinksMenu } = require('./drinksMenu.js')
const { Drink } = require('./Drink.js')


const soda = new Soda(1, "Soda", 3.69, "Strawberry", "RefriKeylinha")
const soda1 = new Soda(2, "Soda", 3.48, "Orange", "RefriKeylinha")

const juice = new Juice(1, "Juice", 5.89, "Lemon", "JuiceKeylinha")
const juice1 = new Juice(2, "Juice", 5.72, "Mango", "JuiceKeylinha")

const tea = new Tea(1, "Tea", 3.29, "Mate", "TeaKeylinha")
const tea2 = new Tea(2, "Tea", 3.34, "Hibiscus", "TeaKeylinha")

drinksMenu()