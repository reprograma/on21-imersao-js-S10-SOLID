const Drink = require("./drink");

class Tea extends Drink {
  constructor(id, name, price, taste, brand) {
    super(id, name, price, taste, brand);

    this.constructor.teaList.push({
      id: this.id,
      name: this.name,
      price: this.price,
      taste: this.taste,
      brand: this.brand,
    });
  }

  static teaList = [];
}

module.exports = Tea;