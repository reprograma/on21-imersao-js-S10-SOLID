const { Drink } = require('./drink');

class Tea extends Drink {
  constructor(id, name, price, brand, flavor) {
    super(id, name, price, brand, flavor)
    this.constructor.teas.push({ 
      id: this.id,
      name: this.name,
      price: this.price,
      brand: this.brand,
      flavor: this.flavor
    })
  }
  static teas = []
}

module.exports = { Tea }
