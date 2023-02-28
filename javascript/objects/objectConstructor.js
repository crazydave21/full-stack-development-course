//object as constructor function
function Person() {
    this.name = "Joel",
    this.hometown = "America",
    this.age = 35;
}

//initializes object constructor
let object = new Person();

//prints object
console.log(object); // {name: 'Joel', hometown: 'America', age: 35}
//access age using dot notation
console.log(object.age); // 35
//access age using bracket notation
console.log(object["age"]); // 35

//sets structure for use in future a.k.a POJO
function personNew(name, hometown, age) {
    this.name = name,
    this.hometown = hometown,
    this.age = age;
}

//initializes the object constructor
let object1 = new personNew("John", "France", 30);

//prints the object
console.log(object1);
//access age using dot notation
console.log(object1.age);
