const Drink = require("./classDrink");

class Tea extends Drink {
      constructor(id, name, price, flavor, brand) {
            super(id, name, price, flavor, brand);

            this.constructor.teaList.push({
                  id: this.id,
                  name: this.name, 
                  price: this.price,
                  flavor: this.flacor,
                  brand: this.brand
            });
      }

      static teaList = [];
}

module.exports = Tea