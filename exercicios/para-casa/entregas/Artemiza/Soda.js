const MenuDrink = require("./menuDrink");

class Soda extends MenuDrink {
  constructor(id, name, price, flavor, brand) {
    super(id, name, price, flavor, brand);
    this.constructor.sodas.push({
      id: this.id,
      name: this.name,
      price: this.price,
      flavor: this.flavor,
      brand: this.brand,
    });
  }
  static sodas = [];
}

module.exports = Soda;
