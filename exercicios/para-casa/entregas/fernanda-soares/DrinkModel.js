export default class DrinkModel {
  id;
  nome;
  preco;
  sabor;
  marca;

  get id() {
    return this.id;
  }

  set nome(nome) {
    this.nome = nome;
  }

  get nome() {
    return this.nome;
  }

  set preco(preco) {
    this.preco = preco;
  }

  get preco() {
    return this.preco;
  }

  set sabor(sabor) {
    this.sabor = sabor;
  }

  get sabor() {
    return this.sabor;
  }

  set marca(marca) {
    this.marca = marca;
  }

  get marca() {
    return this.marca;
  }
}
