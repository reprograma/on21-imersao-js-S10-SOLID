class drink {
  id;
  name;
  price;
  brand;
  flavor;

  constructor(id, name, price, brand, flavor) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.flavor = flavor;
  }
}

module.exports = drink;
