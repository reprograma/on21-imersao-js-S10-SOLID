let menuFixoBebidas = [{
    id: 1,
    nome: "Refrigerante",
    preco: 3.50,
    sabor: "Morango",
    marca: "RefriKeylinha",
},
{
    id: 2,
    nome: "Suco",
    preco: 2.50,
    sabor: "Uva",
    marca: "SuquinhoKeylinha",
},
{
    id: 3,
    nome: "Chá",
    preco: 3.00,
    sabor: "Mate",
    marca: "MateKeylinha",

}];

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
        Preço: ${menuFixoBebidas[escolha - 1].preco}
        Sabor: ${menuFixoBebidas[escolha - 1].sabor}
        Marca: ${menuFixoBebidas[escolha - 1].marca}`)
    retornarMenu()
}

ofertaMenu();

