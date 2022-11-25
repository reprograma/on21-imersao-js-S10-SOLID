const MenuDrink = require("./menuDrink");

class Juice extends MenuDrink {
  constructor(id, name, price, flavor, brand) {
    super(id, name, price, flavor, brand);
    this.constructor.juices.push({
      id: this.id,
      name: this.name,
      price: this.price,
      flavor: this.flavor,
      brand: this.brand,
    });
  }

  static juices = [];
}

module.exports = Juice;
