console.log ("\nFirst Object\n")
//First object
var myPerson = {
    firstName: "John",
    LastName: "Doe",
    Age: "38"    
};

console.log(`person: \n name: "${myPerson.firstName} ${myPerson.LastName}" \n age: ${myPerson.Age})

console.log("\nour array\n")
var icecreamFlavors: Array<string> = [
    "mint",
    "choc",
    "carmel",
    "other",
]
icecreamFlavor.forEach((flavor, 1) =>{
    console.log(`${i + 1}. ${flavor})
})