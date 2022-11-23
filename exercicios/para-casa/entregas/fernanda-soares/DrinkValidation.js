export default class DrinkValidation {
  validateDrinkAttribute(attribute, type) {
    let isValid = false;

    if (typeof attribute === type) {
      isValid = true;
    }

    return isValid;
  }
}
