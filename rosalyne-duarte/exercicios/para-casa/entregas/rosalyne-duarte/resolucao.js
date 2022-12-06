const drink = require("./drink");

const Soda = new drink(1, "Soda", 3.5, "Morango", "SodaKeylinha");
const Juice = new drink(2, "Juice", 2.5, "Juice", "JuiceKeylinha");
const Tea = new drink(3, "Tea", 3.0, "Tea", "TeaKeylinha");

function offerMenu() {
  let choose = Number(
    prompt(`Enter the number you want information on:
    1- Soda
    2- Juice
    3- Tea
    4- Exit Menu
    `)
  );

  switch (choose) {
    case 1:
      alert(
        ` Nome: ${Soda.name}\n Preço: R$${Soda.price.toFixed(2)}\n flavor: ${
          Soda.flavor
        }\n brand: ${Soda.brand}`
      );
      offerMenu();
      break;
    case 2:
      alert(
        ` Nome: ${Juice.name}\n Preço: R$${Juice.price.toFixed(2)}\n flavor: ${
          Juice.flavor
        }\n brand: ${Juice.brand}`
      );
      offerMenu();
      break;
    case 3:
      alert(
        ` Nome: ${Tea.name}\n Preço: R$${Tea.price.toFixed(2)}\n flavor: ${
          Tea.flavor
        }\n brand: ${Tea.brand}`
      );
      offerMenu();
      break;
    case 4:
      break;
    case 0:
      break;
    default: {
      alert("Invalid option");
      offerMenu();
    }
  }
}

offerMenu();
