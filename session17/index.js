
// BMW -> M5 : 4000000
// BMW -> M4 : 3000000
// BMW -> M3 : 2000000

class Car {
    name = "";
    model = "";

    constructor(name, model) {
        this.name = name;
        this.model = model;


    }
    drive() {
        console.log("drive : ", this.name)
    }

    calcPrice(count) {
        if (this.model === "M5")
            console.log(`Result : ${count} ${this.name} -> model : ${this.model} -> Total Price : ${4000000 * count}`)
        else if (this.model === "M4")
            console.log(`Result : ${count} ${this.name} -> model : ${this.model} -> Total Price : ${3000000 * count}`)
        else if (this.model === "M3")
            console.log(`Result : ${count} ${this.name} -> model : ${this.model} -> Total Price : ${2000000 * count}`)

    }
}


const car1 = new Car("BMW", "M3")
car1.calcPrice(10)
car1.calcPrice(5)


// 
