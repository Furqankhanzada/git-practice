let student = {name: "Ijlal", age: 30, email: 'test@test.com'};

let { name, age, email } = student;

let user = {name, age, email};

let a = {name: "one"};
let b = {name: "one"};
let c = {...a};

c.name = "test";

console.log('a', a);
console.log('a == b', a == b);


class Car {
    constructor(info) {
        console.log(info)
        this.model = info.model;
        this.make = info.make;
    }
    wheels(){
        console.log("It has 4 wheels")
    }
    getModel(){
        return this.model
    }
}

class Mira extends Car {
    constructor(info) {
        super(info);
        console.log("This is Mira")
    }
}

const mira = new Mira({model: 2017, make: "diahatsu"});
mira.wheels();
console.log(mira.getModel());