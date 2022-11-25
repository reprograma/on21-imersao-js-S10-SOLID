
class Bebida {
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
    static bio = [];
}

module.exports = Bebida;

