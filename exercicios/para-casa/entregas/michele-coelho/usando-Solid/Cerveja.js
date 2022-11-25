const Bebida = require("./Bebida");

class Cerveja extends Bebida {
    constructor(nome, preco, marca, sabor) {
        super(nome, preco, marca, sabor);
    };
};
module.exports = Cerveja;