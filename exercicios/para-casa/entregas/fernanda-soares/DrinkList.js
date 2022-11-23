export default class DrinkList {
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
}
