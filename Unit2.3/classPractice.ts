class Employee {
    id: number;
    name: string;
    phone: number;
    email: string;

    constructor (id: number, name: string, phone: number, email: string) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email
    }
    toString(): string {
        let output = 
        `Employee record --- ID: ${this.id}\n` +
        `Name: ${this.name}\n` +
        `Contact info\n` +
        `\thhone: ${this.phone}\n` +
        `\tEmail ${this.email}\n` +
    }
}

let firstEmployee = new Employee (
    1,
    "cool dude",
    5555555555,
    "email@email.com"
);

console.log(firstEmployee.toString())

class Birb {
    name: string;
    canFly: boolean;
    hasFeathers: boolean = true;

    constructor (name: string, canFly: boolean) {
        this.name = name;
        this.canFly = canFly
    }
}

let birbs: Array<Birb> = [
    new Birb ("bird 1", true),
    new Birb ("bird 2", true),
    new Birb ("not a bird", false),
    new Birb ("not a bird 2", false)
]

birbs.forEach((item: Birb) =>{
    console.log(item)
})