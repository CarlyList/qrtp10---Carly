var numbersList: Array<number> = [45, 60]

var animalList: Array<string> = [
    "elephant",
    "lion",
    "tiger",
    "bear",
    "oh my"
]

numbersList.push (70)
numbersList.push (80)
numbersList.push (90)

console.log("the first list is:", numbersList)
console.log("the item at the end of the second list is", animalList.pop())
console.log("the remaining items on this list are:", animalList)
console.log("this should be 70", numbersList[2])
console.log("this should be elephant", animalList)