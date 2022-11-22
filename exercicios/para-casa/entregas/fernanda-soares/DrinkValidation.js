export default class DrinkValidation {
  validateNome(nome) {
    let isValid = false;

    if (typeof nome === "string") {
      isValid = true;
    }

    return isValid;
  }
  validatePreco(preco) {
    let isValid = false;

    if (typeof preco === "number") {
      isValid = true;
    }

    return isValid;
  }
  validateSabor(sabor) {
    let isValid = false;

    if (typeof sabor === "string") {
      isValid = true;
    }

    return isValid;
  }
  validateMarca(marca) {
    let isValid = false;

    if (typeof marca === "string") {
      isValid = true;
    }

    return isValid;
  }
}
