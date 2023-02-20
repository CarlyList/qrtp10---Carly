class Bird {
    name: string;
    canFly: boolean;
    hasFeather: boolean = true;

    constructor(name: string, canFly: boolean) {
        this.name = name;
        this.canFly = canFly;
    }

    flapWings(){
        if(this.canFly)
        console.log(`${this.name} flaps its wings`)
        else
        console.log (`${this.name} prefers to run`)
    }

}

let birds: Array<Bird> = [
    new Bird ("bird 1", true),
    new Bird ("bird 2", true),
    new Bird ("not a bird", false),
    new Bird ("not a bird 2", false)
]

birds.forEach ((item: Bird) => {
    item.flapWings()
})