// //1
// let number1 = 5, number2 = 6

// console.log(number1 > number2)
// console.log(number1 < number2)
// console.log(number1 >= number2)
// console.log(number1 <= number2)

// //2
// let number3 = "1", number4 = 1

// console.log(number3 == number4)
// console.log(number3 === number4)
// console.log(number3 != number4)
// console.log(number3 !== number4)
// console.log(number3 == !number4)
// console.log(!!number3)

// //3
// console.log(0 == false)
// console.log(0 === false)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log(null == undefined)
// console.log(null === undefined)
// console.log('0' == false)
// console.log('0' === false)
// console.log([] == [])
// console.log([] === [])
// console.log({} == {})
// console.log({} === {})
// //4
// if (number1 === number2) {
//     console.log('Ці змінні рівні')
// } else {
//     console.log('Ні, вони не рівні')
// }

// number1 = 4

// switch(number1){
//     case 5: 
//         console.log('Змінна рівна 5')
//         break;
//     case 4:
//         console.log('Змінна менша 5')
//         break;
//     default:
//         console.log('Кейси не виконуються')
// }

// number1 == 4 ? console.log('variable number1 equal 4') : console.log('lie')

// //6
// let name = 'Vlad', age = 19
// if (age < 18){
//     console.log(name + ' is under 18 years old')
// }
// if (age > 18 && age <= 22){
//     console.log(name + ' is between the ages 18 and 22')
// } else {
//     console.log('Your age is over 22 years old')
// }
// 7
// const number = +prompt('Enter a number from 0 to 3')
// switch(number){
//     case 0:
//         alert('you entered the number 0')
//         break;
//     case 1:
//         alert('you entered the number 1')
//         break;
//     case 2 || 3:
//         alert('you entered the number 2 or maybe the number 3')
//         break;
//     default:
//         alert('none')   
// }
// //8

// age >= 18 ? console.log('Can vote') : console.log('Cannot vote')

//9
let result
let numberInputOne = +prompt('Введіть перше число')
let numberInputTwo = +prompt('Введіть друге число')

if (numberInputOne == '' || numberInputTwo == ''){
    console.log('error')
} else if(isNaN(numberInputOne) || isNaN(numberInputTwo)){
    console.log('error')
} else if (numberInputOne <= 0 || numberInputTwo <= 0){
    console.log('error')
} else {
    result = numberInputOne + numberInputTwo
    console.log(numberInputOne + '+' + numberInputTwo + '=' + result)
} 


if (numberInputOne > 5 && numberInputOne < 10){
    console.log(numberInputOne + ' - ваше перше число більше 5, але менше 10')
} else {
    if (numberInputOne > 15 && numberInputOne < 30){
        console.log(numberInputOne + ' - ваше перше число більше 15, але менше 30')
    } else {
        if (numberInputOne > 30){
            console.log(numberInputOne + ' - ваше перше число більше 30')
        }
    }
}
if (numberInputTwo > 5 && numberInputTwo < 10){
    console.log(numberInputTwo + ' - ваше друге число більше 5, але менше 10')
} else {
    if (numberInputTwo > 15 && numberInputTwo < 30){
        console.log(numberInputTwo + ' - ваше друге число більше 15, але менше 30')
    } else {
        if (numberInputTwo > 30){
            console.log(numberInputTwo + ' - ваше друге число більше 30')
        }
    }
}






















