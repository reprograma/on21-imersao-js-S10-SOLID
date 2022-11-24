let showFixedMenu = [
    {
      id: 1,
      name: "Soda",
      price: 3.5,
      flavor: "Strawberry",
      brand: "RefriKeylinha",
    },
    {
      id: 2,
      name: "Suco",
      price: 2.5,
      flavor: "Grape",
      brand: "SuquinhoKeylinha",
    },
    {
      id: 3,
      name: "Tea",
      price: 3.0,
      flavor: "Herb Tea",
      brand: "MateKeylinha",
    },
  ];
  drinksMenu = () => {
    let drinkSelected = Number(
      prompt(`Enter the number you wnat information:
      1- Soda
      2- Suco
      3- Tea`)
    );
  
    switch (drinkSelected) {
      case 1:
        alert(`
          Name: ${menu[0].name}
          Price: ${menu[0].price}
          Flavor: ${menu[0].flavor}
          Brand: ${menu[0].brand}`);
        break;
      case 2:
        alert(`
          Name: ${menu[1].name}
          Price: ${menu[1].price}
          Flavor: ${menu[1].flavor}
          Brand: ${menu[1].brand}`);
        break;
      case 3:
        alert(`
          Name: ${menu[2].name}
          Price: ${menu[2].price}
          Flavor: ${menu[2].flavor}
          Brand: ${menu[2].brand}`);
        break;
    }
  }
  drinksMenu();
  let backToMenu = confirm("Would you like to return to the menu?");
  while (backToMenu == true) {
      drinksMenu();
  }