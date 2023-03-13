//1

if (2 < 3){
    let bool = true
}
// console.log(bool) помилка

console.log(bool1) // Якщо написати під другим if scope виведе значення true

if (1 < 2){
    var bool1 = true
}

for (let i = 1; i < 10; i++){
    let numb1 = 243
}
// console.log(numb1) помилка

for (let i = 0; i < 2; i++){
    var numb2 = 244
}
console.log(numb2) // змінна виведеться, якщо написати лог зверху змінна вийде з видимості але помилки не буде

function forVar(){
    var string1 = 'dadada'
}
forVar()
//console.log(string1) помилка тому що всередині функції
function forLet(){
    let string2 = 'bebebe'
}
forLet()
//console.log(string2) помилка тому що всередині функції

//2
// console.log(variable1) помилка
let variable1 = 'aa1'
console.log(variable2)
var variable2 = 983

console.log(func1(5,2,1))
function func1(a, b, c){
    return a - b - c
}
// console.log(func2(10,5)) помилка
let func2 = (a, b) => a + b

// console.log(func3(10,1)) помилка
let func3 = function (a, b) {
    return b * a
}

//3

console.log(this)
"use strict";
console.log(this) // При суворому режимі нічого не змінилось при виведенні this
const person = {name: 'Vlad', age: 19, infoPerson: function (){ console.log(this.name), console.log(this.age)}}

person.infoPerson()

//4

// Є декілька способів втратити контекст this
//Перший
//const infoPerson = person.infoPerson.bind(null)
//infoPerson()
//Другий
//person.infoPerson.call(null) або міняємо call на bind і також втрачаємо контекст. Замість значення null може бути undefined

//5

function valueReturner(value){
    console.log(value)
}
valueReturner(98312)


//6
const person1 = {
    name: 'Andrii',
    age: 22,
    logInfo: function (job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}
const person2 = {
    name: "Olena",
    age: 21
}
//1ий спосіб
let propertyOne = person1.logInfo.bind(person2)
propertyOne('Police', 1234)
//2ий спосіб
let propertyTwo = person1.logInfo.apply(person2, ['President', 9873])
//3ій спосіб
let propertyThree = person1.logInfo.call(person2, 'sailor', 8734)

//6

function myBind(method, context){
    return function () {
        return method.apply(context)
    }
}
let testObj = {
    age: 25,
    ageAlert(){
        console.log(`My age is ${this.age}`)
    }
}
let testObjFunction = myBind(testObj.ageAlert, testObj)
testObjFunction()