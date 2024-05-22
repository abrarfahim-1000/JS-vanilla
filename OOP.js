class person{
    constructor(first,last,dob,){
        this.first=first
        this.last=last
        this.dob=new Date(dob) 
    }
    birthyear(){
        return this.dob.getFullYear()
    }
    fullname(){
        return `${this.first} ${this.last}`
    }
}

person1=new person('mary','jane','3-5-1999')

console.log(person1.dob)
console.log(person1.birthyear())
console.log(person1)