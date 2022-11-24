/*
Refatore o exercicio da Semana 9 e aplique SOLID (Aplique Classe se necessário)

*/
const  listaBebidas  = require('./listaBebidas.js')
const entrada = require("prompt-sync")({sigint: true})

let finalizar = false;

function imprimirListaBebidas() {
    console.log("\n Bebidas Disponiveis: \n");
    if (listaDeBebidas.length > 0) {
        for (let i = 0; i < listaDeBebidas.length; i++) {
            console.log(`Bebida ${i + 1}: ${listaDeBebidas[i].nome}`);
        }
        console.log("\n");
    } else {
        console.log("Essa bebida não está disponível.");
    }
}

function mostrarDetalhesDaBebida(id) {
    console.log("\n Bebida selecionada");
    console.log(
        ` ${id}:  
        Nome:`, listaBebidas[id - 1].nome,`; 
        Preço:`, listaBebidas[id - 1].preco,`; 
        Marca:`, listaBebidas[id - 1].marca,`; 
        Sabor:`, listaBebidas[id - 1].sabor
    );
}

do {

    let opcao = entrada("** Máquina de Bebidas ** \n Digite a opção Desejada:  \n 1 - Listar as bebidas; \n 2 - Mostrar Informações da Bebida; \n 3 - Sair \n");
    switch (opcao) {
        case "1": imprimirListaDeBebidas(); break;
        case "2": {
            let id = entrada("Digite o número da bebida escolhida:");
            mostrarInformacoesBebidaPeloId(id);
        }; break;
        case "3": sair = true; 
        break;
        default: console.log("Favor digitar uma opção válida!");
    }

} while (!finalizar);