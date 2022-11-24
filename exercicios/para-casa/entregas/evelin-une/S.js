class Car {
    constructor(name, model, year){
        this.name = name;
        this.model = model;
        this.year = year;
    }

    getCar(id){
        return this.http.get('api/cars/' + id);
    }
}

class savingCar extends Car { 
  
    return this.post('api/cars', { name: this.name, year: this.year, model: this.model }) 
}
