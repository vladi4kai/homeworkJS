//1

// спосіб 1

let aboutOne = {
    name: 'John',
    age:30,
}

//спосіб 2

let aboutTwo = new Object()

aboutTwo.name = 'Max'
aboutTwo.age = 23

//2

const newUserData = {
    name: 'Oleh',
    age: 25,
    "new proffesion": 'programmer',
}
console.log(newUserData.age)
console.log(newUserData.name)
console.log(newUserData["new proffesion"])

//3

let object = {
    name: 'Oleh',
    age: 25,
    hobby: 'readins books'
}
for (let i in object){
    console.log(i + ':' + object[i])
}

//4

let infoAboutYou = {
    hobby: 'learn something new',
}
infoAboutYou.proffesion = 'future programmer'
infoAboutYou.age = 19
infoAboutYou.name = 'Vlad'

infoAboutYou.hobby = 'reading books'

infoAboutYou.newInfo = true
delete infoAboutYou.newInfo

//5

const userData = {
    name: 'Oleh',
    age: 25,
}

let copyUserData = {... userData}
copyUserData.age = 20
console.log(copyUserData)
console.log(userData)

//6

function toArray(obj) {
   return Object.entries(obj)
}
console.log(toArray({a: 1 , b: 2}))
console.log(toArray({shrimp: 15 , tots: 22}))
console.log(toArray({}))

//7

const array = ['orange', 'pineapple', 'orange', 'apple', 'pineapple', 'pineapple', 'orange', 'pineapple','orange', 'pineapple', 'pineapple']

let counterOfItems = array.reduce((calc, curr) => { calc[curr] = (calc[curr] || 0) + 1
    return calc
},{})

const uniqueItems = [...new Set(array)]

uniqueItems.sort((a, b) => counterOfItems[b] - counterOfItems[a])

console.log(uniqueItems)