class Car {
    constructor(name) {
        this.brand = name
    }
    present() {
        return  `I have a this.brand car`
    }
}

class Model extends Car {
    constructor(name, model) {
        super(name)
        this.model = model
    }
    show() {
        return this.present() + ", Brand :  "+ this.name
    }
}

// let myCar =  new Car("Ford")
// let car0 = new Model("Mex", "Abc")

// car0.show()
module.exports = Model