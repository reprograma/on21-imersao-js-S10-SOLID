const Bebida = require("./Bebida");

class Leite extends Bebida {
    constructor(nome, preco, marca, sabor) {
        super(nome, preco, marca, sabor);
    };
};
module.exports = Leite;