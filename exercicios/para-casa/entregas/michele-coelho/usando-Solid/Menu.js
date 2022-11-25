const Imprimir = require('./Imprimir');
const Escolher = require('./Escolher');

const prompt = require('prompt-sync');
const promptt = prompt();

class Menu {

    static menu() {
        Imprimir.imprimir();
        var escolherBebida = Number(promptt(`Informe o numero que deseja informações:`));
        Escolher.escolheBebida(escolherBebida);
    }
}
module.exports = Menu;