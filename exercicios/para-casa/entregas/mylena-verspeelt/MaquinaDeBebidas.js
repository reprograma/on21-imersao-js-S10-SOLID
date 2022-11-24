const Bebidas = require('./Bebidas.js')

let refrigerante = new Bebidas(1, 'Refrigerante', 3.50, 'Morango', 'RefriKeylinha')
let cha = new Bebidas(2, 'Chá', 3.00, 'Mate', 'MateKeylinha')
let suco = new Bebidas(3, 'Suco', 2.50, 'Uva', 'SuquinhoKeylinha')


const menuFixoBebidas = [refrigerante, suco, cha]

function ofertaMenu() {
    let escolha = Number(prompt(`Informe o numero que deseja informações:
        1- Refrigerante
        2- Suco
        3- Chá`));
    mostrarMaisDetalhes(escolha)
}

function retornarMenu() {
    let retornaMenu = confirm("Deseja retornar ao menu?");
    while (retornaMenu == true) {
        ofertaMenu();
    }
}

//[escolha - 1] porque a posição dele no array é um número a menos que o id
function mostrarMaisDetalhes(escolha) {
    alert(`
        Nome: ${menuFixoBebidas[escolha - 1].nome}
        Preço: ${menuFixoBebidas[escolha - 1].valor}
        Sabor: ${menuFixoBebidas[escolha - 1].sabor}
        Marca: ${menuFixoBebidas[escolha - 1].marca}`)
    retornarMenu()
}

ofertaMenu()