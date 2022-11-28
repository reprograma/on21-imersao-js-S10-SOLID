class Drink {
  id;
  name;
  price;
  flavor;
  brand;

  constructor(id, name, price, flavor, brand) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.flavor = flavor;
    this.brand = brand;
  }
}

module.exports = Drink;
