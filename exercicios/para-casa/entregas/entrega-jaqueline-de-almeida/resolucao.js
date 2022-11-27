class MachineBeer {
  constructor() {}

  menu(id, name, price, flavour, brand) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.flavour = flavour;
    this.brand = brand;
    [
      {
        id: 1,
        name: "Soda",
        price: 3.5,
        flavour: "strawberry",
        brand: "RefriKeylinha",
      },
      {
        id: 2,
        name: "Soda",
        price: 3.5,
        flavour: "grape",
        brand: "SuquinhoKeylinha",
      },
      {
        id: 3,
        name: "Tea",
        price: 3.0,
        flavour: "Mate",
        brand: "MateKeylinha",
      },
    ];
  }

  offerMenu(choice) {
    prompt(`What beer do you want? Choose a number!:
        1- Soda,
        2- Juice,
        3- Tea`);

    switch (choice) {
      case 1:
        alert(`
          Name: ${menu[0].name}
          Price: ${menu[0].price}
          Flavour: ${menu[0].flavour}
          Brand: ${menu[0].brand}`);
        break;
      case 2:
        alert(`
          Name: ${menu[0].name}
          Price: ${menu[0].price}
          Flavour: ${menu[0].flavour}
          Brand: ${menu[0].brand}`);
        break;
      case 3:
        alert(`
          Name: ${menu[0].name}
          Price: ${menu[0].price}
          Flavour: ${menu[0].flavour}
          Brand: ${menu[0].brand}`);
        break;
    }
  }
}

returnMenu = MachineBeer();
returnMenu.menu;
