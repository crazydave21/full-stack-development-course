//object literal
let object = {name:"Joel", hometown: "America", age: 35};

//prints the object
console.log(object); // {name: 'Joel', hometown: 'America', age: 35}

//adds "parent" property and sets "John" as value
Object.defineProperty(object, "parent", {
    value: "John",
    //sets write protection to true
    writable: false
});

object.parent = "Jack"; //has no effect, write protection is true
 
//prints the object
console.log(object); // {name: 'Joel', hometown: 'America', age: 35, parent: 'John'}

//object as constructor function
function Person() {
    this.name = "Joel",
    this.hometown = "America",
    this.age = 35;
}

//initializes object constructor
let object1 = new Person();

Object.defineProperty(object1, "parent", {
    value: "John",
    //sets write protection to false
    writable: true
})

object1.parent = "Jack"; // replaces "John" as "Jack"

console.log(object1.parent); // Jack

//used as get accessor
Object.defineProperty(object1, "getName", {
    get () {
        return this.name;
    }
});

console.log(object1.getName); // Joel;

//used as set accessor
Object.defineProperty(object1, "setName", {
    set (newName) {
        return this.name = newName;
    }
});

object1.setName = "Dan"; //replaces "Joel" as "Dan"

console.log(object1.name); // Dan