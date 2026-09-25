//================ classses, constructors & object creation ================
class Customer{
    name;
    age;
    address;

    constructor(name , age , address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let customer1 = new Customer("Senthuran", 22, "Chilaw");
console.log(customer1);
let customer2 = new Customer("Thurkka", 22, "Chilaw");
console.log(customer2);

console.log(customer1.name);
console.log(customer1.age);
console.log(customer1.address);

console.log(customer2.name);
console.log(customer2.age);
console.log(customer2.address);