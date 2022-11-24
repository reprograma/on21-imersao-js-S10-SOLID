const Drink = require("./Drink");
const DrinksList = require("./DrinksList");
const Menu = require("./Menu");

//Criação das Bebidas Soda, Juice e Tea
const newSoda = new Drink(1, "Fanta", 5.5, "Laranja", "Coca-Coca");
const newJuice = new Drink(2, "Dell-Vale", 3.5, "Uva", "Dell-Vale");
const newTea = new Drink(3, "Chá-Leão", 6.5, "Limão", "Leão");

//Instancia a classe DrinksList
const list = new DrinksList();

//Método addDrink onde é adicionado as bebidas criadas dentro da lista
list.addDrink(newSoda);
list.addDrink(newJuice);
list.addDrink(newTea);

//Instancia a classe Menu com o paramêtro: as bebidas criadas
const menu = new Menu(newSoda, newJuice, newTea);



//Chama os métodos da classe Menu, onde o menu oferta a lista de bebeida e o render tem a opção de voltar ao menu
// console.log(menu)
// console.log(menu.getDrinkId(1))
menu.menu();
menu.render();
