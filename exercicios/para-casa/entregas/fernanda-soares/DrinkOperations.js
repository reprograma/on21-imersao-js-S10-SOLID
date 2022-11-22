export default class DrinkOperations {
  drinkList = [
    {
      id: 1,
      nome: "Refrigerante",
      preco: 3.5,
      sabor: "Morango",
      marca: "RefriKeylinha",
    },
    {
      id: 2,
      nome: "Suco",
      preco: 2.5,
      sabor: "Uva",
      marca: "SuquinhoKeylinha",
    },
    {
      id: 3,
      nome: "Chá",
      preco: 3.0,
      sabor: "Mate",
      marca: "MateKeylinha",
    },
  ];

  get drinkList() {
    return this.drinkList;
  }

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
