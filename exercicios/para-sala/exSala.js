/*
Aplique SOLID nos exemplos abaixo:

*/
// S
class Car {
    id

    construtor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year 
    }
}
/** 
//O

let modelo = prompt('Informe o modelo do veiculo');
if(modelo == 'corolla'){
    console.log('Especificações do Corolla')
}
    else if(modelo == 'Uninho'){
        console.log('Especificações Uninho')
    }
*/

class getCar extends Car {
    super(id) {
        this.http.get(`api/cars/`, id)
    }
}

class saveCar extends Car {
    super(name, model, yars) {
        this.post(`api/cars`, {
            name: this.name,
            model: this.model,
            year: this.year
        })
    }
}

//O

class vehicleModels extends Car {
    super(model) {
        model = prompt('Informe o modelo do veiculo');
        if (model == 'corolla') {
            console.log('Especificações do Corolla')
        }
        else if (model == 'Uninho') {
            console.log('Especificações Uninho')
        }
    }
}

//L

/** 
class carros{
    constructor(modelo){

        this.aviao = 'Voar';
        this.moto = 'Empinar'
    }
}
*/

class cars extends Car {
    constructor(model, style) {
        super(model)
        if (this.model = 'aviao') {
            this.style = 'Voar';
        }

        if (this.model = 'moto') {
            this.style = 'Empinar'
        }
    }
}




//I

/**
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
*/

class openWindow {
    constructor(pull) {
         return this.pull = pull;
    }
}

class closeWindow {
    constructor(push){
        return this.push = push;

    }
}

class cleanWindow {
    constructor(floorCloth){
        return this.floorCloth = floorCloth;

    }
}



//D

/**
class ligarDesligar{
ventilador(ligar,desligar){
    this.ligar;
    this.desligar;
    }
}

*/

class onOff {
    fan(on, off) {
        this.on = on;
        this.off = off;
    }
}
