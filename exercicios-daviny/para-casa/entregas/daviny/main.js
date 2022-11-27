const offerMenu = require('./controller/offerMenu');
const Juice = require('./services/drinks/Juice')
const Soda = require('./services/drinks/Soda')
const Tea = require('./services/drinks/Tea')

const juice1 = new Juice(1, "Juice", "5.50", "limon", "Dia");
const juice2 = new Juice(2, "Juice", "9.75", "grape", "Kapo");
const juice3 = new Juice(3, "Juice", "8.15", "orange", "Natural One");

const soda1 = new Soda(1, "Soda", "3.50", "guarana", "Antarctica");
const soda2 = new Soda(2, "Soda", "4.80", "cola", "Coke");
const soda3 = new Soda(3, "Soda", "5.25", "orange", "Fanta");

const tea1 = new Tea(1, "Tea", "8.50", "peach tea", "Lipton"); 
const tea2 = new Tea(2, "Tea", "9.50", "lemon tea", "Feel Good"); 
const tea3 = new Tea(3, "Tea", "12.15", "matte tea", "Matte Lion" );

offerMenu()