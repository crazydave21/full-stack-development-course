//function or method inside an object
let object = {name:"Joel", hometown: "America", age: 35, 
greet: function() {
    console.log("Hello", this.name);
}};

//calls greet function inside the object
object.greet(); // Hello Joel

//object as constructor function [NOTE : refer objectConstructor.js]
function person() {
    this.name = "Joel",
    this.hometown = "America",
    this.age = 35;
    this.greet = function() {
        console.log("Hello", this.name);
    }
}

//initializes the constructor object
let object1 = new person();

//calls greet function inside the object
object1.greet(); // Hello Joel