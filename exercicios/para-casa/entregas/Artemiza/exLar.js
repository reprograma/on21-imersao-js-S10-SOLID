/*
Refatore o exercício da Semana 9 e aplique SOLID (Aplique Classe se necessário)*/

let menuDrink = [
  {
    id: 1,
    name: "Soda",
    price: 5.0,
    flavor: "Lemon",
    brand: "SodaMiza",
  },
  {
    id: 2,
    name: "Juice",
    price: 3.0,
    flavor: "Mango",
    brand: "JuiceMiza",
  },
  {
    id: 3,
    name: "Tea",
    price: 4.5,
    flavor: "Fennel",
    brand: "FennelMiza",
  },

  {
    id: 4,
    Final: "go out",
  },
];

function menuAvailable() {
  let select = Number(
    prompt(`Select the desired number: 
        1- Soda
        2- Juice
        3- Tea
        4 - Go out`)
  );

  switch (select) {
    case 1:
      alert(`
            Name: ${menuDrink[0].name}
            Price: ${menuDrink[0].price}
            Flavor: ${menuDrink[0].flavor}
            Brand: ${menuDrink[0].brand}`);
      break;
    case 2:
      alert(`
            Name: ${menuDrink[1].name}
            Price: ${menuDrink[1].price}
            Flavor: ${menuDrink[1].flavor}
            Brand: ${menuDrink[1].brand}`);
      break;
    case 3:
      alert(`
            Name: ${menuDrink[2].name}
            Price: ${menuDrink[2].price}
            Flavor: ${menuDrink[2].flavor}
            Brand: ${menuDrink[2].brand}`);
      break;
  }
}
menuAvailable();
let backMenu = confirm("Do you want to return to the menu?");
while (backMenu == true) {
  menuAvailable();
}
