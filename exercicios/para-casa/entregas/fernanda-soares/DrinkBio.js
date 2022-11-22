import DrinkOperations from "./DrinkOperations";

export default class DrinkBio {
  formatDrinkBio(id) {
    const drinkOperations = new DrinkOperations();

    const drink = drinkOperations.getDrinkById(id);
    return `Nome: ${drink.nome} \n
            Preço: ${drink.preco} \n
            Sabor: ${drink.sabor} \n
            Marca: ${drink.marca}`;
  }
}
