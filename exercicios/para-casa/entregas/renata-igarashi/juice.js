const { Drink } = require('./drink');

class Juice extends Drink {
  constructor(id, name, price, brand, flavor) {
    super(id, name, price, brand, flavor)
    this.constructor.juices.push({ 
      id: this.id,
      name: this.name,
      price: this.price,
      brand: this.brand,
      flavor: this.flavor
    })
  }
  static juices = []
}

module.exports = { Juice }

