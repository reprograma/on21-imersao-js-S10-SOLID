const Menu = require('./Menu');
const prompt = require('prompt-sync');
const promptt = prompt();

class RetornaMenu {

    static retornar() {

        let retornaMenu;
        do {
            Menu.menu();
            retornaMenu = promptt(`\n Deseja retornar ao menu? 1-sim ; 0-Não  `);
        } while (retornaMenu == 1)
    }
}
module.exports = RetornaMenu;