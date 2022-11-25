const Soda = require("./Soda");
const Juice = require("./Juice");
const Tea = require("../Artemiza/Tea");
const menuAvailable = require("../Artemiza/menuAvailable");

const soda1 = new Soda(1, "Soda", 5.0, "Lemon", "SodaMiza");
console.log(soda1);

const juice1 = new Juice(2, "Juice", 3.0, "Mango", "JuiceMiza");
console.log(juice1);

const tea1 = new Tea(3, "Tea", 4.5, "Fennel", "TeaMiza");
//console.log(tea1);
console.log(Tea.teas);

menuAvailable();
