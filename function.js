function checkeven(num){
    if(num===0){
        return 'zero'
    }
    else if(num%2===0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

console.log(checkeven(8))

const add=(num1=0,num2=0) => num1+num2
console.log(add(6,9))