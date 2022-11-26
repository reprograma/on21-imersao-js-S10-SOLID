const drinksMenuOffer = require('./controller/drinksMenuOffer')

const Juice = require('./model/classJuice')
const Soda = require('./model/classSoda')
const Tea = require('./model/classTea')

const orangeJuice = new Juice(1, "Juice", "3.50", "Laranja", "Your Juice");
const limonJuice = new Juice(2, "Juice", "3.50", "Limão", "Refresco");
const strawberryJuice = new Juice(3, "Juice", "6.50", "Morango", "Your Juice");

const orangeSoda = new Soda(1, "Soda", "6.50", "Laranja", "Your Juice");
const limonSoda = new Soda(2, "Soda", "6.50", "Limão", "Refresco");
const strawberrySoda = new Soda(3, "Soda", "8.50", "Morango", "Your Juice");

const orangeTea = new Tea(1, "Tea", "1.50", "Laranja", "Your Juice");
const limonTea = new Tea(2, "Tea", "1.50", "Limão", "Refresco");
const strawberryTea = new Tea(3, "Tea", "6.50", "Morango", "Your Juice");

drinksMenuOffer()