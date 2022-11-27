/*
Aplique SOLID nos exemplos abaixo:

*/
// S
class Car {
    construtor(nome, modelo, ano){
         this.name = nome this.model = model this.year = year }
    getCar(id){
         return this.http.get('api/cars/' + id) }
    saveCar(){
         return this.post('api/cars', { name: this.name, year: this.year, model: this.model }) 

    }
}

//O
let modelo = prompt('Informe o modelo do veiculo');
if(modelo == 'corolla'){
    console.log('Especificações do Corolla')
}
    else if(modelo == 'Uninho'){
        console.log('Especificações Uninho')
    }


//L
class carros{
    constructor(modelo){

        this.aviao = 'Voar';
        this.moto = 'Empinar'
    }
}

//I
class abrirFecharJanela{
    abrirJanela(puxar){
        return this.puxar;
        
    }
    fecharJanela(empurrar){
        return this.empurrar;

    }
    limparJanela(pano){
        return this.pano;
    }
    
}

//D

class ligarDesligar{
ventilador(ligar,desligar){
    this.ligar;
    this.desligar;
    }
}