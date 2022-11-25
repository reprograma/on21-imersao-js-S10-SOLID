/*
Aplique SOLID nos exemplos abaixo:

*/
// S
class Car {
    id;
    construtor(name, model, year) {

        this.name = nome;
        this.model = model;
        this.year = year
    }

}


class getCar extends Car {
    super(id) {
        this.http.get(`api/cars/`, id);

    }
}

class saveCar extends Car {
    super(name, model, year) {

        this.post('api/cars', { name: this.name, year: this.year, model: this.model })


    }
}

//O

class modeloVeiculo extends Car {
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
class carros extends Car{
    constructor(model, style) {
        super(model)
        if (this.model = 'aviao')
        {
        this.style = 'Voar';
        
        }
        if (this.model = 'moto')
        {
     
        
        this.style = 'Empinar'
    }
}
}

//I


class abrirJanela {
   constructor(puxar) {
        return this.puxar = puxar;

    }

}

class fecharJanela{
    constructor(empurrar){
        return this.empurrar = empurrar;

    }
}

class limparJanela{
    constructor(pano){
        return this.pano = pano;

    }
}
//D

class ligarDesligar {
    ventilador(ligar, desligar) {
        this.ligar = ligar;
        this.desligar= desligar;
    }
}