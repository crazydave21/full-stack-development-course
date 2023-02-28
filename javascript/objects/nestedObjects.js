// object inside an object i.e nested objects
let object = {name: "Joel", hometown: "America", age: 35, parent: {name: "John", age: 63}};

//prints all data inside an object
console.log(object); // {name: 'Joel', hometown: 'America', age: 35, parent: {…}}
//prints all data inside "parent" object from "object"
console.log(object.parent); // {name: 'John', age: 63}