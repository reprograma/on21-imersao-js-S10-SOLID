
const Drink = require("./Drink");

class Soda extends Drink {
  constructor(id, name, price, taste, brand) {
    super(id, name, price, taste, brand);

    this.constructor.sodaList.push({
      id: this.id,
      name: this.name,
      price: this.price,
      taste: this.taste,
      brand: this.brand,
    });
  }

  static sodaList = [];
}

module.exports = Soda;