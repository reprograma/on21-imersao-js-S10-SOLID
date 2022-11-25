const Bebida = require('./Bebida');

class Escolher extends Bebida {

    static escolheBebida(bebida) {

        console.log("\n Bebida selecionada");
        console.log(`Bebida ${bebida}:
        Nome:`, Bebida.bio[bebida - 1].Nome,
            `; Preço:`, Bebida.bio[bebida - 1].Preco,
            `; Marca:`, Bebida.bio[bebida - 1].Marca,
            `; Sabor:`, Bebida.bio[bebida - 1].Sabor
        );
    }
}
module.exports = Escolher;