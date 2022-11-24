class DrinksList {
  list = [];

  addDrink({ id, name, price, flovor, brand }) {
    this.list.push({
      id,
      name,
      price,
      flovor,
      brand,
    });
  }

  getDrinkById(id) {
    return this.list.find((item) => item.id === id);
  }
}

module.exports = DrinksList;
