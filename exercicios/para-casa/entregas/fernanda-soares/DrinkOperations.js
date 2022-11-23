import DrinkList from "./DrinkList";

export default class DrinkOperations {
  drinkList = new DrinkList().drinkList;

  getDrinkById(id) {
    const drink = this.drinkList.find((element) => element.id === id);
    return drink;
  }

  addDrink(nome, preco, sabor, marca) {
    let newDrink;
    newDrink.id = this.drinkList.length + 1;
    newDrink.nome = nome;
    newDrink.preco = preco;
    newDrink.sabor = sabor;
    newDrink.marca = marca;
    this.drinkList.push(newDrink);
    return `Drink criado!`;
  }

  deleteDrink(id) {
    const drink = this.getDrinkById(id);
    const drinkIndex = this.drinkList.indexOf(drink);
    this.drinkList.splice(drinkIndex, 1);
    return `Drink removido!`;
  }
}
