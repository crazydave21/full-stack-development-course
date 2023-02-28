function Person() {
    this.name = "Joel",
    this.hometown = "America";
    this.parent = "John"
}

//adds property "age" [NOTE : property is accessible only using prototype]
Person.prototype.age = 35;

//initializes object constructor
let object = new Person();

// //throws an error
// object.prototype.age = 40;

//prints the object
console.log(object); // Person {name: 'Joel', hometown: 'America'}

//sets "parent" property [NOTE : cannot change already defined properties]
Person.prototype.parent = "Dan";
Person.prototype = {parent: "Dan"};

//prints "parent" property
console.log(object.parent); // John

//prints property "age"
console.log(object.age) // 35

//sets "age" property
Person.prototype.age = 40;

//prints property "age"
console.log(object.age) // 40

//sets "age" property [NOTE : use before initialization]
Person.prototype = {age: 50};

//initializes object constructor
let object1 = new Person();

//prints property "age"
console.log(object1.age);

// console.log(object1.prototype.age) // error

//prints property inside "Person" prototype
console.log(Person.prototype) // {age: 50}

//adds method "changeName"
Person.prototype.changeName = function(newName) { // changes already defined "name" property
    return this.name = newName;
}

console.log(object1.changeName("Jack")); // Jack
console.log(object1.name); // Jack


