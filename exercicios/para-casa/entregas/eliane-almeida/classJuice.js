const Drink = require("./Drink");

class Juice extends Drink {
      coonstructor(id, name, price, flavor, brand) {
            super(id, name, price, flavor, brand);

            this.constructor.juiceList.push({
                  id: this.id,
                  name: this.name, 
                  price: this.price,
                  flavor: this.flacor,
                  brand: this.brand
            });
      }

      static juiceList = [];
}

module.exports = Juice