const drinksMenu = require("./drinksMenu");
const Juice = require("./Juice");
const Soda = require("./Soda");
const Tea = require("./Tea");

const juiceData = new Juice(001, "Juice", "17.60", "Peach", "Do Bem");
const juice2Data = new Juice(002, "Juice", "8.90", "Orange", "Del Valle");

const sodaData = new Soda(001, "Soda", "3.99", "Guarana", "Guaraná Antártica");
const soda2Data = new Soda(002, "Soda", "3.49", "Lemon", "Sprite");

const teaData = new Tea(001, "Tea", "9.99", "Green Grape Tea", "Salton");
const tea2Data = new Tea(002, "Tea", "5.99", "Green Tea", "Yaí");

drinksMenu();