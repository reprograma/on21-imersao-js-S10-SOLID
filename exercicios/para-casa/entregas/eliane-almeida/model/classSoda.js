const Drink = require("./classDrink");

class Soda extends Drink {
      constructor(id, name, price, flavor, brand) {
            super(id, name, price, flavor, brand);

            this.constructor.sodaList.push({
                  id: this.id,
                  name: this.name, 
                  price: this.price,
                  flavor: this.flacor,
                  brand: this.brand
            });
      }

      static sodaList = [];
}

module.exports = Soda