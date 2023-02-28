//object as constructor function
function Person() {
    this.name = "Joel";
}

//adds "age" property
Person.prototype.age = 50;

//initializes object constructor
let object1 = new Person();
let object = new Person();

//prints "age" property
console.log(object1.age); // 50
//prints inherited "age" property
console.log(object.age); // 50
