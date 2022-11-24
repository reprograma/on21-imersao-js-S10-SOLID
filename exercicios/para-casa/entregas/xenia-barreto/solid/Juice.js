const Drink = require("./Drink");
class Juice extends Drink {
  constructor(id, name, price, taste, brand) {
    super(id, name, price, taste, brand);

    this.constructor.juiceList.push({
      id: this.id,
      name: this.name,
      price: this.price,
      taste: this.taste,
      brand: this.brand,
    });
  }

  static juiceList = [];
}

module.exports = Juice;
