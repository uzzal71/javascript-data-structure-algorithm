const obj = {
    name: "Nasir Uddin",
    age: 28,
    sayName: function() {
        return this.name;
    }
}

obj.hobby = "Criket";
obj.favorite_place = "Vartican City";
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.sayName());

