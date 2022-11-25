const Bebida = require('./Bebida');

class Imprimir extends Bebida {

    static imprimir() {
        console.log('\n');
        for (let i = 0; i < Bebida.bio.length; i++) {
            console.log(`${i + 1} - ${Bebida.bio[i].Nome} - ${Bebida.bio[i].Marca}`);
        }
        console.log('\n');
    }
}
module.exports = Imprimir;