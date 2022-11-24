const { Drink } = require('./drink');

class Soda extends Drink {
  constructor(id, name, price, brand, flavor) {
    super(id, name, price, brand, flavor)
    this.constructor.sodas.push({ 
      id: this.id,
      name: this.name,
      price: this.price,
      brand: this.brand,
      flavor: this.flavor
    })
  }
  static sodas = []
}

module.exports = { Soda }

// const soda = new Soda(1, "Soda", 3.50, "Strawberry", "refriKeylinha")
// const soda1 = new Soda(1, "Soda", 3.50, "Lemon", "refriKeylinhazinha")
