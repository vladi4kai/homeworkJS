//1

// Масив який треба сортувати
let arrayOne = [1, 6, 3, 8, 7, 9, 10]

// По зростанню

function sorterOne(a, b){
    return a - b
}
arrayOne.sort(sorterOne)
console.log(arrayOne)

// По спаданню

function sorterTwo(c, d){
    return d - c
}
arrayOne.sort(sorterTwo)
console.log(arrayOne)

//2
// Метод перший - самий кращий та зрозумілий

let unfiltredArray = [1,2,[3,4],[5,[6,7]]]
let filtredArrayOne = unfiltredArray.flat(2)

console.log(filtredArrayOne)

// Метод два - через метод flatMap

let filtredArrayTwo = unfiltredArray.flatMap(arrFilter => Array.isArray(arrFilter) ? arrFilter : [arrFilter]).flat()
console.log(filtredArrayTwo)

//3

let arrThree = [1,3,3,6,8,6,1]

let arrThreeUniqueItems = new Set(arrThree)
console.log(arrThreeUniqueItems)

//4

let arrFour = [1, 6, 8, 6, 1]

for (let i = 0; i < arrFour.length; i++){
    arrFour[i]+=5
}
console.log(arrFour)

let arrFourSum = 0

for (let i = 0; i < arrFour.length; i++){
    arrFourSum += arrFour[i]
}
console.log(arrFourSum)

//5

let five = 6
// створюємо масив від 1 до 6 через map. перед тим присвоєїм нашій змінній масив
let arrFiveTwo = new Array(five).fill().map((value, i) => i + 1)
console.log(arrFiveTwo)
// обчислюємо факторіал
let factorial = arrFiveTwo.reduce((a, b) => a * b)
console.log(factorial)

//6

function palindrome(anyWord){
    anyWord = anyWord.toLowerCase()

    let reverseItem = anyWord.split('').reverse().join('')

    return anyWord === reverseItem
}
console.log(palindrome('racecar'))
console.log(palindrome('Анна'))
console.log(palindrome('cat'))

//7

function anagrammaChecker(wordA, wordB){
    if (wordA.length !== wordB.length){
        return false
    }
    wordA = wordA.toLowerCase()
    wordB = wordB.toLowerCase()
    wordA = wordA.split('').sort().join('')
    wordB = wordB.split('').sort().join('')

    return wordA === wordB
}
console.log(anagrammaChecker('friend', 'finder'))
console.log(anagrammaChecker('sharm', 'marsh'))
console.log(anagrammaChecker('cat', 'dog'))


//8

function checkVowelOrConsonent(array){
    let arrVowel = []
    let arrConsonent = []
    for (let i = 0; i < array.length; i++){
        if (['a','e','i','o','u'].includes(array[i].toLowerCase())){
            arrVowel.push(array[i])
        } else {
            arrConsonent.push(array[i])
        }
    }
    arrVowel.sort()
    arrConsonent.sort()

    arrVowel.push(arrVowel.length)
    arrConsonent.push(arrConsonent.length)

    return [arrVowel, arrConsonent]
}
console.log(checkVowelOrConsonent(['a', 'f', 'd', 'j', 'y', 't', 'i', 'r']))






