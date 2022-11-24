const { Soda } = require('./soda')
const { Juice } = require('./juice')
const { Tea } = require('./tea')
const { menuDrinkMachine } = require('./menuDrinkMachine')


const soda1 = new Soda(1, "Soda", 1.99, "Guarana", "RefriKeylinha")
const soda2 = new Soda(2, "Soda", 2.48, "Cola", "RefriKeylinha")

const juice1 = new Juice(1, "Juice", 3.89, "Grape", "JuiceKeylinha")
const juice2 = new Juice(2, "Juice", 5.60, "Orange", "JuiceKeylinha")

const tea1 = new Tea(1, "Tea", 3.29, "Black Tea", "TeaKeylinha")
const tea2 = new Tea(2, "Tea", 3.34, "Green Tea", "TeaKeylinha")

menuDrinkMachine()