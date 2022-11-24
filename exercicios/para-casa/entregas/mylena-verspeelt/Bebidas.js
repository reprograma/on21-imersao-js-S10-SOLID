class Bebidas {
    #id
    #nome
    #valor
    #marca
    #sabor

    constructor(id, nome, valor, marca, sabor) {
        this.#id = id
        this.#nome = nome,
            this.#valor = valor,
            this.#marca = marca,
            this.#sabor = sabor
    }

    set id(id) {
        this.#id = id
    }
    get id() {
        return this.#id
    }

    set nome(nome) {
        this.#nome = nome
    }
    get nome() {
        return this.#nome
    }

    set valor(valor) {
        this.#valor = valor
    }
    get valor() {
        return this.#valor
    }

    set marca(marca) {
        this.#marca = marca
    }
    get marca() {
        return this.#marca
    }

    set sabor(sabor) {
        this.#sabor = sabor
    }
    get sabor() {
        return this.#sabor
    }
}

module.exports = Bebidas

