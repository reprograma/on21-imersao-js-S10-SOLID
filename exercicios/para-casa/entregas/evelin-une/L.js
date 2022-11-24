class Veiculos {
    constructor(modelo){
        this.aviao = new Aviao();
        this.moto = new Moto();
    }
}   

class Aviao extends Veiculos{
    constructor(aviao){
        this.aviao = aviao;
    }
    voar(){
        console.log("Voar")
    }
}

class Moto extends Veiculos {
    constructor(moto){
        this.moto = moto;
    }

    empinar(){
        console.log("Empinar")
    }
}