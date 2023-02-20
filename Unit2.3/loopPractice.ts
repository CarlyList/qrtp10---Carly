var todo: Array<string> = [
    "first thing",
    "second thing",
    "third thing",
    "forth thing"
]
// for:declare variable
for(let i = 0; i < todo.length; i++){
    console.log(`Todo #${i + 1}: ${todo[i]}`);
}