//1
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFree){
    let totalOrderPrice = orderedQuantity + pricePerDroid + deliveryFree
    return('You ordered droids worth ' + totalOrderPrice + ' credits.' + ' Delivery ' + deliveryFree + ' credits is included in total price')
}
console.log(makeOrderMessage(20,5,50))

//2

function isAdult(age){
    let passed = (age >= 18)
    return passed
}
console.log(isAdult(19))

//3

function checkAge(age1){
    let message

    if ((age1 >= 18)){
        message = 'You are an adult'
    } else {
        message = 'You are a minor'
    }

    return message
}
console.log(checkAge(17))

//4

let array = []
let numberType = []
let stringType = []
let booleanType = []
let undefinedType = []
let objectType = []
let symbolType = []
let bigintType = []
function dataTypeSort(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            numberType.push(array[i])
        } else if (typeof array[i] === 'string') {
            stringType.push(array[i])
        } else if (typeof array[i] === 'boolean') {
            booleanType.push(array[i])
        } else if (typeof array[i] === 'undefined') {
            undefinedType.push(array[i])
        } else if (typeof array[i] === 'object') {
            objectType.push(array[i])
        } else if (typeof array[i] === 'symbol') {
            symbolType.push(array[i])
        } else if (typeof array[i] === 'bigint') {
            bigintType.push(array[i])
        }
    }
    return array
}
console.log(dataTypeSort([false, undefined, 'shake', {age: 19}]))
console.log(booleanType)
console.log(undefinedType)
console.log(stringType)
console.log(objectType)

//5

function myNumber(number) {
    let doubleNumbers = 0
    let otherNumbers = 0
    number.toString().split('').forEach((splitNum) => {
        if (splitNum % 2 === 0) {
            doubleNumbers++
        } else {
            otherNumbers++
        }
    })
    return [doubleNumbers, otherNumbers]
}
console.log(myNumber(5345575478))

//6



let inputOne
let inputTwo
function firstAction() {

    inputOne = +prompt('Ваше число')

    if (inputOne == '') {
        alert('error')
    } else if (isNaN(inputOne)) {
        alert('error')
    } else if (inputOne <= 0) {
        alert('error')
    } else {
        secondAction()
    }
}
firstAction()
function secondAction(){

    inputTwo = +prompt('Ваше число в межах 10 одиниць від попереднього')

    if (inputTwo == '') {
        alert('error')
    } else if (isNaN(inputTwo)) {
        alert('error')
    } else if (inputTwo <= 0) {
        alert('error')
    } else if (inputTwo <= (inputOne+10)) {
        thirdAction()
    } else {
        alert('Спробуйте знову')
        firstAction()
    }
}
function thirdAction(){
    let loseConfirmer
    for (let numberOfAttempts = 5; numberOfAttempts => 1; numberOfAttempts--){
        let inputThree = +prompt('Вгадати число, яке знаходиться в діапазоні між першими двома введеними числами. Кількість спроб ' + numberOfAttempts)
        if (inputThree >= inputOne && inputThree <= inputTwo){
            alert('Ви перемогли'); break
        } else if (numberOfAttempts === 1){
            loseConfirmer = confirm('Спроби закінчились, хочете зіграти ще?')
        }
        if (loseConfirmer === true){
            firstAction()
        }
    }
}

