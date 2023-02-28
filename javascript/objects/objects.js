//object literal
let object = {name:"Joel", hometown: "America", age: 35};
console.log(object); // {name: 'Joel', hometown: 'America', age: 35}

//returns type of variable
console.log(typeof object); // object

//access Name by dot notation [NOTE : use for static keys]
console.log(object.name); // Joel
//access Name by bracket notation [NOTE : use for dynamic keys]
console.log(object["name"]); // Joel

//adds Likes property to "object"
object.likes = "Reading Books";

console.log(object); // {name: 'Joel', hometown: 'America', age: 35, likes: 'Reading Books'}

//sets "hometown" as value
let objectValue = "hometown";
//sets "objectKey" as key to "hometown"
let objectKey = object.objectValue;
//print objectValue by dot notation
console.log(objectKey); // undefined
//print objectValue by bracket notation [NOTE : usecase for bracket notation]
console.log(object[objectValue]); // America