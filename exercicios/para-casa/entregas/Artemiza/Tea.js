const MenuDrink = require("./menuDrink");

class Tea extends MenuDrink {
  constructor(id, name, price, flavor, brand) {
    super(id, name, price, flavor, brand);
    this.constructor.teas.push({
      id: this.id,
      name: this.name,
      price: this.price,
      flavor: this.flavor,
      brand: this.brand,
    });
  }

  static teas = [];
}

module.exports = Tea;
