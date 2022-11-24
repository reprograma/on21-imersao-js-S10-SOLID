class Dispositivo {
    Ligado = true;

    constructor(ligar, desligar){
        this.ligar = ligar;
        this.desligar = desligar;
    }
    
    Ligar(){
        return "ON";
    }

    Desligar(){
        return "OFF"

    }
    
    Acionar(){
        if (!this.Ligado)
        this.Ligar();
      else
        this.Desligar();
    }
}

class Ventilador extends Dispositivo{

}