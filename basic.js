console.log('Hello');

const name='rocco'
const age=20
const job='developer'
const height=5.9

console.log(`My name is ${name} and I am ${age}. I am a ${job} and my height is ${height}`)

let numbers=new Array(1,2,3,4,5)
console.log(numbers)

let fruits=['apple','banana','mango','orange', 10, true, 4.5]
console.log(fruits)

fruits.unshift('grapes')
console.log(fruits)

//python's .append() is .push() here

let person1={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

let {firstName,lastName,address:{city}}=person1
console.log(city)

let person1JSON=JSON.stringify(person1)
console.log(person1JSON)

for(let i in fruits){
    console.log(fruits[i])
}

// creating array from array
let fruitmap=fruits.map(function(fruit){
    return fruit
})
console.log(fruitmap)


// checking data types
let fruitfilter=fruits.filter(function(fruit){
    return typeof fruit === 'string' 
})
console.log(fruitfilter)

fruitfilter=fruits.filter(function(fruit){
    return Number.isInteger(fruit)
})
console.log(fruitfilter)

floatfilter = fruits.filter(function(fruit){
    return typeof fruit === 'number' && !Number.isInteger(fruit)
})
console.log(floatfilter)

floatfilter = fruits.filter(function(fruit){
    return typeof fruit === 'boolean'
})
console.log(floatfilter)

// ternary operator
let x=11
let color = x>10 ? 'red' : 'blue'
console.log(color)

// fat arrow
fruits.forEach((i)=> console.log(i))