const drink = require('./drink')


const refrigerante = new drink(1,"Refrigerante",3.50,"Morango","RefriKeylinha")
const suco = new drink( 2,"Suco",2.50,"Uva","SuquinhoKeylinha");
const cha = new drink( 3, "Chá", 3.00,"Mate","MateKeylinha");
const sair = new drink(4, 'Sair do menu');


 function offerMenu() {
  
     let choose = Number(prompt(`Informe o numero que deseja informações:
    1- ${refrigerante.name}
    2- ${suco.name}
    3- ${ cha.name}
     4- ${sair.name}
    `)

 );
      
     switch (choose) {
         case 1: alert(` Nome: ${refrigerante.name}\n Preço: R$${(refrigerante.price).toFixed(2)}\n flavor: ${refrigerante.flavor}\n brand: ${refrigerante.brand}`);
        offerMenu();
         break;
         case 2: alert(` Nome: ${suco.name}\n Preço: R$${(suco.price).toFixed(2)}\n flavor: ${suco.flavor}\n brand: ${suco.brand}`);
         offerMenu();
         break;
        case 3: alert(` Nome: ${cha.name}\n Preço: R$${(cha.price).toFixed(2)}\n flavor: ${cha.flavor}\n brand: ${cha.brand}`);
        offerMenu();
        break;
        case 4: 
         break;
        case 0: 
         break;
         default :
         {
         alert('Opção inválida');
         offerMenu();
         }
     }

 }


 offerMenu();

