//SOLID:
//Single Responsibility Principle: Class "Menu" tem um única responsabilidade

let menu = prompt("Bebidas disponíveis:\n"
+ "(Selecione a opção esolhendo um número)\n\n"
+ "1) Coca-Cola\n"
+ "2) Fanta\n"
+ "3) Guaraná\n"
+ "4) Água mineral COM gás\n"
+ "5) Água mineral SEM gás\n"
+ "6) Suco de laranja e \n"
+ "7) Água de coco\n"
);

class Menu {
    constructor(produto, preco, marca, sabor){
        this.produto = produto,
        this.preco = preco,
        this.marca = marca,
        this.sabor = sabor
    }
}


const colaCola = new Menu ("Cola Cola", 6, "Cola Cola", "Cola");
const fanta = new Menu ("Fanta", 6, "Cola Cola", "Laranja")
const guarana = new Menu ("Guaraná", 6, "Cola Cola", "Guaraná")
const aguaComGas = new Menu ("Água mineral COM gás", 3, "Indaiá", "-")
const aguaSemGas = new Menu ("Água mineral SEM gás", 3, "Indaiá", "-")
const sucoDeLaranja = new Menu ("Suco de laranja", 8, "-", "Laranja")
const aguadeCoco = new Menu ("Água de coco", 2, "-", "-")


switch(menu){
    case "1":
        alert(`Produto: ${colaCola.produto} \n` + `Preço: ${colaCola.preco} \n`+ `Marca: ${colaCola.marca} \n` + `Sabor: ${colaCola.sabor} \n`)
    break
    case "2":
        alert(`Produto: ${fanta.produto} \n` + `Preço: ${fanta.preco} \n`+ `Marca: ${fanta.marca} \n` + `Sabor: ${fanta.sabor} \n`)
    break
    case "3":
        alert(`Produto: ${guarana.produto} \n` + `Preço: ${guarana.preco} \n`+ `Marca: ${guarana.marca} \n` + `Sabor: ${guarana.sabor} \n`)
    break
    case "4":
        alert(`Produto: ${aguaComGas.produto} \n` + `Preço: ${aguaComGas.preco} \n`+ `Marca: ${aguaComGas.marca} \n` + `Sabor: ${aguaComGas.sabor} \n`)
    break
    case "5":
        alert(`Produto: ${aguaSemGas.produto} \n` + `Preço: ${aguaSemGas.preco} \n`+ `Marca: ${aguaSemGas.marca} \n` + `Sabor: ${aguaSemGas.sabor} \n`)
    break
    case "6":
        alert(`Produto: ${sucoDeLaranja.produto} \n` + `Preço: ${sucoDeLaranja.preco} \n`+ `Marca: ${sucoDeLaranja.marca} \n` + `Sabor: ${sucoDeLaranja.sabor} \n`)
    break
    case "7":
        alert(`Produto: ${aguadeCoco.produto} \n` + `Preço: ${aguadeCoco.preco} \n`+ `Marca: ${aguadeCoco.marca} \n` + `Sabor: ${aguadeCoco.sabor} \n`)
    break
}