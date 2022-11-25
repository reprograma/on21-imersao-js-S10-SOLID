const Drink = require("./Drink");

class Tea extends Drink {
      coonstructor(id, name, price, flavor, brand) {
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