//map as constructor
let map = new Map([["fruit", ["apple", 100]]]);
console.log(map); // Map(1) {size: 1, fruit => (2) ['apple', …]}
//prints size of "map"
console.log(map.size); // 1
//access value using key "fruit"
console.log(map.get("fruit")); // (2) ['apple', 100]
//returs true if key "fruit" is present else false
console.log(map.has("fruit")); // true

let map1 = new Map();
//adds key, value pair in insertion order
map1.set("fruits", ["apple", "mango", "orange"]);

//prints contents of "map1"
console.log(map1); // Map(1) {size: 1, fruits => (3) ['apple', …]}
//access array of fruits as key, value pairs
console.log(map1.get("fruits")[0]); // apple

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//clear() and delete()

let map2 = new Map();
//adds key, value pair in insertion order
map2.set("fruits", ["apple", "mango", "orange"]);
map2.set("cars", ["Toyota", "Honda", "Hyundai"]);
map2.set("bikes", ["TVS", "Honda"]);

//prints contents of "map2"
console.log(map2); // Map(3) {size: 3, fruits => (3) ['apple', …], cars => (3) ['Toyota', …], bikes => (2) ['TVS', '…', …]}
//deletes key "fruits"
console.log(map2.delete("fruits")); // true
//prints remaining contents
console.log(map2); // Map(2) {size: 2, cars => (3) ['Toyota', …], bikes => (2) ['TVS', '…', …]}
//empties map
console.log(map2.clear());
//prints emptied map
console.log(map2); // Map(0) {size: 0}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//iterating over maps forEach() and for...of()

let map3 = new Map([["name", "John"], ["age", "30"]]);

//prints both key, value [NOTE: only works when size is 1]
for(let i of map3) {
    console.log(i); // (2) ['name', 'John'] // (2) ['age', '30']
}

//prints both key, value individually
for(let [key,value] of map3) {
    console.log(key, value); // name John // age 30
}

let map4 = new Map();
map4.set("fruits", ["apple", "mango", "orange"]);
map4.set("cars", ["Toyota", "Honda", "Hyundai"]);
map4.set("bikes", ["TVS", "Honda"]);

//prints all keys, value pairs
for (let [key, value] of map4) {
    console.log(key, value); // fruits (3) ['apple', 'mango', 'orange'] // cars (3) ['Toyota', 'Honda', 'Hyundai'] // bikes (2) ['TVS', 'Honda']
}

//prints all keys, value pairs
map4.forEach(function (value, key) {
    console.log(key, value); // fruits (3) ['apple', 'mango', 'orange'] // cars (3) ['Toyota', 'Honda', 'Hyundai'] // bikes (2) ['TVS', 'Honda']
});

//iterating maps over keys
for(let i of map4.keys()) {
    console.log(i); // fruits // cars // bikes
}

//iterating maps over values
for(let i of map4.values()) {
    console.log(i); // (3) ['apple', 'mango', 'orange'] // (3) ['Toyota', 'Honda', 'Hyundai'] // (2) ['TVS', 'Honda']
}

//iterating maps by entries()
for(let i of map4.entries()) {
    console.log(i[0], i[1]); // fruits (3) ['apple', 'mango', 'orange'] // cars (3) ['Toyota', 'Honda', 'Hyundai'] // bikes (2) ['TVS', 'Honda']
}