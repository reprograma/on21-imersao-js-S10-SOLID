const prompt = require('prompt-sync');
const promptt = prompt();

class Menu {
    nome;
    preco;
    marca;
    sabor;
    bio;

    constructor(nome, preco, marca, sabor) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.sabor = sabor;
        this.constructor.bio.push({ "Nome": this.nome, "Preco": this.preco, "Marca": this.marca, "Sabor": this.sabor });
    }
    static bio = [
        { "Nome": "Refrigerante", "Preco": 3.50, "Marca": "RefriKeylinha", "Sabor": "Morango" },
        { "Nome": "Suco", "Preco": 2.50, "Marca": "SuquinhoKeylinha", "Sabor": "Uva" },
        { "Nome": "Chá", "Preco": 3.00, "Marca": "SuquinhoKeylinha", "Sabor": "Mate" }
    ];
}

function imprimir() {
    for (let i = 0; i < Menu.bio.length; i++) {
        console.log(`${i + 1} - ${Menu.bio[i].Nome}`);
    }
}

function ofertaMenu() {
    imprimir();
    var escolherBebida = Number(promptt(`Informe o numero que deseja informações:`));

    switch (escolherBebida) {
        case 1: alert(Menu.bio[escolherBebida - 1]);
            break;
        case 2: alert(Menu.bio[escolherBebida - 1]);
            break;
        case 3: alert(Menu.bio[escolherBebida - 1]);
            break;
    }
}
ofertaMenu();
var retornaMenu = confirm("Deseja retornar ao menu?");
while (retornaMenu == true) {
    ofertaMenu();
}



