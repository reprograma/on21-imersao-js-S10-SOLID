class abrirFecharJanela {
    constructor(puxar, empurrar){
        this.puxar = puxar;
        this.empurrar = empurrar;
    }
    
    abrirJanela(puxar){
        return this.puxar;
        
    }
    fecharJanela(empurrar){
        return this.empurrar;

    }
}

class limparJanela {
    constructor(pano){
        this.pano = pano;
    }

    limparJanela(pano){
        return this.pano;
    }
}