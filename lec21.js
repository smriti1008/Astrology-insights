const obj = {
    name: "Smriti",
    age: 20,
    greet: function(){
        console.log("hello");
    }
}

// console.log(obj.greet());
obj.greet()



class Person{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`);
    }
}

const person1 = new Person("smriti,20");
const person2 = new Person("Iti,21");

console.log(person1)
