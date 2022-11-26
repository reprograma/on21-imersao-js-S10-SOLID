const readline = require("readline-sync");
const Juice = require("../model/classJuice")
const Soda = require("../model/classSoda")
const Tea = require("../model/classTea")


console.clear()


const drinksMenuOffer = () => {
      console.log(
            `****************** MENU DRINKS ******************
            1 - Refrigerantes
            2 - Sucos
            3 - chás
            4 - Sair
            Escolha uma das opções para ver a lista de Drinks`
      );

      const select = readline.question();

      console.clear();
  
      switch (select) {
            case "1":
                  const juices = Juice.juiceList;
                  console.table(Juice);
                  drinksMenuOffer();
                  break;
            case "2":
                  const sodas = Soda.sodaList;
                  console.table(Soda);
                  drinksMenuOffer();
                  break;
            case "3":
                  const teas = Tea.teaList;
                  console.table(Tea);
                  drinksMenuOffer();
                  break;
            case "4":
                  console.log("Obrigada")
                  break;
            default:
                  console.log("Não existe essa opção de Drink")
                  drinksMenuOffer();
                  break;
      }
  };
  
  module.exports = drinksMenuOffer
  

  