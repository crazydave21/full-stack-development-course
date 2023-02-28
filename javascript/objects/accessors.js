//object literal
let object = {name:"Joel", hometown: "America", age: 35,

//get accessor
get getName() {
    return this.name;
}};
console.log(object.getName); // Joel

//object literal
let object1 = {name:"Joel", hometown: "America", age: 35,

//set accessor
set setName(newName) {
    this.name = newName;
}};

//sets name as "John"
object1.setName = "John";

//prints new name
console.log(object1.name); // John

