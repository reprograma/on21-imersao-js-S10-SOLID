class Drink {
  #id;
  #name;
  #brand;
  #flavor;
  #price;

  constructor(id, name, brand, flavor, price) {
    this.#id = id;
    (this.#name = name),
      (this.#brand = brand),
      (this.#flavor = flavor),
      (this.#price = price);
  }

  set id(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }

  set name(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }

  set brand(brand) {
    this.#brand = brand;
  }
  get brand() {
    return this.#brand;
  }

  set flavor(flavor) {
    this.#flavor = flavor;
  }
  get flavor() {
    return this.#flavor;
  }

  set price(price) {
    this.#price = price;
  }
  get price() {
    return this.#price;
  }
}

module.exports = Drink;
