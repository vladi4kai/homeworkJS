//1

// let arrOne = [1, 2, 3, 4, 5]
// let reversed = []
// function arrayReverser(arrOne){
//     for (i = 0; i < arrOne.length; i++){
//         reversed[i] = arrOne[arrOne.length - 1 - i]
//     }
//     return reversed
// }
// arrayReverser(arrOne)
// console.log(reversed)

//2

// let arrTwo = [0, 1, false, 2, undefined, '', 3, null]
// let filtredArray = arrTwo.filter(filtredElement => filtredElement > false)
// console.log(filtredArray)

//3

// let arrThree = [1, 6, 22, 31, 11, 59, 44, 2, 8, 9]
// let doubleNumbers = arrThree.filter(num1 => num1 % 2 == 0)
// console.log(doubleNumbers)
// let otherNumbers = arrThree.filter(num2 => num2 % 2 == 1)
// console.log(otherNumbers)

//4

// let array = [1, 'string', null, false, undefined, {age: 18}, Symbol('foo'), 554324n]
// let numberType = []
// let stringType = []
// let booleanType = []
// let undefinedType = []
// let objectType = []
// let symbolType = []
// let bigintType = []
// for (let i = 0; i < array.length; i++) {
//     if(typeof array[i] === 'number'){
//          numberType.push(array[i])
//      } else if (typeof array[i] === 'string'){
//          stringType.push(array[i])
//      } else if (typeof array[i] === 'boolean'){
//          booleanType.push(array[i])
//      } else if (typeof array[i] === 'undefined'){
//          undefinedType.push(array[i])
//      } else if (typeof array[i] === 'object'){
//          objectType.push(array[i])
//      } else if (typeof array[i] === 'symbol'){
//          symbolType.push(array[i])
//      } else if (typeof array[i] === 'bigint'){
//          bigintType.push(array[i])
//      }
// }
// console.log(numberType)
// console.log(stringType)
// console.log(booleanType)
// console.log(undefinedType)
// console.log(objectType)
// console.log(symbolType)
// console.log(bigintType)

//5

// let unsortedArray = [3, 8, 7, 6, 5, -4, 1, -3, 2]
// function sort(a, b){
//     return a - b // щоб зробити сортування від більшого до меншого треба поміняти операнди на b - a
// }
// unsortedArray.sort(sort)
// console.log(unsortedArray)

//6

// let arr1 = [1, 2, 3]
// let arr2 = [100, 2, 1, 10]
// let sumOfArrays = (new Set(arr1.concat(arr2)))
// // set дозволяє зберігати унікальні значення
// console.log(sumOfArrays)

//7

let arr7 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
let defaultMaximumCounter = 1
let currentCounterPoint = 0
let theMostElement

for (let i = 0; i < arr7.length; i++){
    for (let j = i; j < arr7.length; j++){ // нам потрібні два цикли щоб простіше реалізувати порівняння і обчислити частоту і сам елемент який повторюється
        if (arr7[i] == arr7[j]){ // саме перевірка заради якої потрібні два цикли, чи повторюється елемент, якщо так то рахівнику плюсуємо одиничку
            currentCounterPoint+=1
        } else if (defaultMaximumCounter < currentCounterPoint) { // якщо наш рахівник стає більшим за дефолтне значення елемента в масиві(1) то ми зберігаємо значення рахівника в дефолтному значенні
            defaultMaximumCounter = currentCounterPoint
            theMostElement = arr7[i] // зберігаємо чи визначаємо  найчастіший елемент виходячи з перевірок
        }
    }
    currentCounterPoint = 0 // обнуляємо рахівник(обовязкова дія) інакше буде 29 було використано 29 разів
}
console.log('Найчастіший елемент ' + theMostElement + ' був використаний ' + defaultMaximumCounter + ' разiв')




