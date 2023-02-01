//2
let task2 = null
console.log(task2)
console.log(typeof null)
//3
let task3 
console.log(task3)
console.log(typeof undefined)
//4 
let task4First = 'Burger'
let task4Second = 150
let task4Three = task4First / task4Second
console.log(task4Three)
console.log(typeof NaN)

if (task4Three !== NaN){
    console.log(true)
} else {
    console.log(false)
}
//5
let firstNumber = +prompt('Введіь перше число')
let secondNumber = +prompt('Введіь друге число')
let thirdNumber = +prompt('Введіь третє число')

let result = firstNumber + secondNumber + thirdNumber
console.log(result)

function checkDataType(){
    if (isNaN(result))
        console.log('This is NaN')
      else {
        console.log('This is number')  
    }
}
console.log(checkDataType())
















