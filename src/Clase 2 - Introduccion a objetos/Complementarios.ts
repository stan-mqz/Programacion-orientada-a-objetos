//Ejercicio 1
const person = {
    name: 'Stanley',
    age: 19,
    isStudent : true,

    describe() {
        console.log(`This person name is ${this.name} and is ${this.age} years old`)
    }
}

console.log(person.describe)

//Ejercicio 2

const product = {
    id: 200,
    name : 'Laptop',
    price: 1000,
    category: 'Technology',
    stock: 20,

    showProductInformation() {
        console.log('===Product Information===')
        console.log(`name : ${this.name}`)
        console.log(`price : ${this.price}`)
        console.log(`category : ${this.category}`)
        console.log(`stock: ${this.stock}`)
        console.log('=========================')
    }

}

//Ejercicio 3

const bankAccount = {
    owner: 'Pepito',
    balance: 500,

    addMoney(amount: number) {
        this.balance  = this.balance + amount
    },

    withDrawMoney(amount: number) {
        this.balance  = this.balance - amount

    }
}


console.log(bankAccount.balance)
bankAccount.addMoney(400)
console.log(bankAccount.balance)
bankAccount.withDrawMoney(300)
console.log(bankAccount.balance)
