class Drink{
    #id;
    #name;
    #type;
    #price;
    constructor(id, name, type, price){
        this.#id = id;
        this.#name = name;
        this.#type = type;
        this.#price = price;
    }

    getDrink(){
        return this.#id, this.#name, this.#type, this.#price
    }    
}

