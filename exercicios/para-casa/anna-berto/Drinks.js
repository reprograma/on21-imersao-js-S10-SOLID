class DrinksMenu {
  constructor(id, name, price, flavour, brand) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.flavour = flavour;
    this.brand = brand;
  }

  bio() {
    return `
        Name: ${this.name}
        Price: ${this.price}
        Flavour: ${this.flavour}
        brand: ${this.brand}`;
  }
}
module.exports = DrinksMenu;
