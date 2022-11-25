const Bebida = require("./Bebida");

class Suco extends Bebida {
    constructor(nome, preco, marca, sabor) {
        super(nome, preco, marca, sabor);
    };
};
module.exports = Suco;