//this practice function is to add the number 2 to any number we give it. 

function addTwo(input: number): number {
    console.log(input)
    return input + 2
}

var firstNumber = 3
var secondNumber = addTwo(firstNumber)
var thirdNumber = addTwo(50)

console.log(firstNumber, secondNumber)
console.log('First Number: ${firstNumber}, Second Number: ${secondNumber}')
console.log(thirdNumber)