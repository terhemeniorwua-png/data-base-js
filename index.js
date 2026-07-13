
//  A SCHOOL ADMINISTRATION SYSTEM


let studentReg = [];

class Student{
    constructor(name, age, course, scores){
        this.name = name
        this.age = age
        this.course = course
        this.scores = scores
        this.average = this.getAverage()
        this.grade = this.getGrade()
        this.passed = this.hasPassed()

        studentReg.push(this)
    }
}
Student.prototype.addScore = function(addedScore){
    this.scores.push(addedScore)

    this.average =this.getAverage()
    this.grade = this.getGrade()
    this.passed= this.hasPassed()

}
 Student.prototype.getAverage = function(){
        let avr = (this.scores)
        .reduce((total, score) => total += score)/(this.scores).length
        return avr
    }
Student.prototype.getGrade = function(){
        if(this.average <= 40){
           return 'F'
        } else if(this.average < 50){
           return 'D'
        } else if(this.average < 60){
           return 'C'
        } else if(this.average < 70){
           return 'B'
        } else if(this.average <=100){
            return 'A'
        }else{
           return'NIL'
        }
    }
Student.prototype.hasPassed = function(){
    if(this.average >= 50){
        return true
    } else{
        return false
    }
}
Student.prototype.displayInfo = function(studNam){
   studentReg.forEach((val) => {
    if(val.Name === studNam){
        console.log(val)
    }
   })
}

let student1 = new Student('Philip', 23, 'Engineering', [34, 67, 86,100, 55])
let student2 = new Student('Timothy', 23, 'Computer Science', [34, 27, 16,10, 35])
let student3 = new Student('Joy', 23, 'Computer Science', [90, 87, 86,90, 55])
let student4 = new Student('Hwee', 23, 'Computer Science', [100, 87, 86,90, 55])
let student5 = new Student('Hwee', 53, 'Computer Science', [100, 87, 86,90, 55])
student2.addScore(100)
// student2.displayInfo('Timothy')
// console.log(studentReg)




class School {
    constructor(schooName){
        this.schooName = schooName
        this.students =[]
        // this.preventDuplicateNames()
    }
    
    addStudents(student){
        let search = this.students.find(studentName => studentName.name === student)
        if(search)return;
       for(let stud of studentReg){
        if(stud.name === student){
            (this.students).push(stud)
        }
       }
    }

   

    removeStudent(stuName){
         for(let stud of this.students){
        if(stud.name === stuName){
            (this.students).pop(stuName)
        }
       }
    }
    findStudent(name){
    return this.students.find(student => {
        if(student.name === name){
            return student
        }
    })
    }

    topStudent(){
      let maxAverage = Math.max(...this.students.map(student => student.average))
      this.students.forEach(student =>{
        if(student.average === maxAverage){
            console.log(student)
        }
      })
    }

    getPassedStudents(){
        return this.students.filter(student => student.passed === true)
    }

    getStudentsByCourse(course){
        return this.students.filter(student => student.course === course)
    }

    schoolReport(){
        let topStudent = this.topStudent()
let report = `
School: ${this.schooName}
Total Students: ${this.students.length}
Passed: ${this.getPassedStudents().length}
Failed: ${this.students.length - this.getPassedStudents().length}
Top Student: ${topStudent.name}
        `

        return report
    }
}





let school = new School('path-finders')

school.addStudents('Timothy')
school.addStudents('Philip')
school.addStudents('Joy')
school.addStudents('Hwee')
school.addStudents('Hwee')
// school.topStudent()
// console.log(school.getPassedStudents())
// console.log(school.getStudentsByCourse('Computer Science'))
// console.log(school.schoolReport())
// console.log(school.preventDuplicateNames())

// console.log('==========================')
// console.log(school)




// =========================================================



// A BANKING SYSTEM



class BankAccount{
    constructor(name, pin, balance){
        this.name = name
        this.pin = pin
        this.balance = balance
        this.transaction = []
        this.generateAccNum()
    }
}
BankAccount.prototype.generateAccNum = function(){
   this.accNum =  Math.floor(1000000000 + Math.random() * 9999999999)
}
BankAccount.prototype.deposit = function(amount){

    try{
        if(amount <= 0){
             this.message ='Amount must be greater than zero'
             return;
        }
    } catch(e){
         e
 }
//  let transaction ={
//     type: 
//  }


 this.balance += amount

 let history = {
    type: 'Deposit',
    amount: amount,
    balanceAfter: this.balance,
    date:Date()
  }

 this.transaction.push(history)
}

BankAccount.prototype.withdraw = function(amount, pin){
    try{
         if(this.pin !== pin){
            this.message =` Incorrect pin` 
            return;
        }else if(amount <= 0){
             this.message ='Amount must be greater than zero'
             return;
        } else if(this.balance < amount){
            this.message = `Insufficient balance`
            return;
        }
    } catch(e){
         e
 } 
 this.balance -= amount
 
  let history = {
    type: 'Withdraw',
    amount: amount,
    balanceAfter: this.balance,
    date:Date()
  }

 this.transaction.push(history)
}

BankAccount.prototype.transfer = function(receiver, amount, pin){

   if(!receiver) return;
    if(this.pin !== pin) {
        this.message =`Invalid pin` 
        return;}
    this.withdraw(amount, pin)
    this.message= `You have successully transferred ${amount} to ${receiver}`
    receiver.deposit(amount)
    receiver.message=  `You have received ${amount} from ${this.name}`

      let history = {
    type: 'Transfer',
    amount: amount,
    balanceAfter: this.balance,
    date:Date()
  }

 this.transaction.push(history)
} 
BankAccount.prototype.changePin =function(oldPin, newPin){
    let resetPin = String(newPin)
    if(this.pin !== oldPin){
        this.message =`Incorrect pin`
        return;
    } else if(resetPin.length !== 4){
        this.message = `Pin must be exactly four digits`
    } else{
        this.pin = newPin
    }
}

BankAccount.prototype.checkBalance = function(pin){
      if(this.pin !== pin){
        this.message =`Incorrect pin`
        return;
    } 
    let res = `Your account balance on ${Date()} is: $${this.balance}`
    return res
}
BankAccount.prototype.accountInfo = function(){
    let user = `
    Name: ${this.name}
    Account Number: ${this.accNum}
    Balance: N${this.balance}`
    console.table(user)
}
BankAccount.prototype.showTransactions = function(type){
    let transType = this.transaction.filter(type => type === this.transaction.type)
    if(type == transType){
        return this.transaction
    }
}



let user1 = new BankAccount('Philip', 1234, 2000)
let user2 = new BankAccount('Tom', 2222, 2000)
let user3 = new BankAccount('Tomi', 5222, 2000)
user1.deposit(6000)
user3.deposit(12000)
user2.changePin(2222, 2323)
user2.changePin(2323, 1111)
user1.changePin(1234, 1111)
user2.changePin(1111, 9089)
user2.deposit(27000, 9089)
user2.withdraw(27000, 9089)
user1.withdraw(7000, 1111)
user1.transfer(user2, 2500, 1234)
user3.transfer(user1, 500, 5222)
// console.log(user2.checkBalance(9089))
// user2.accountInfo()
// console.log(user3.showTransactions('Transfer'))
// console.log(user1, user2, user3)



class Bank{
    
    constructor(bankName){
        this.bankName = bankName
        this.accounts = []
        this.transactions = []
    }
    openAccount(account){
        let user = this.accounts.find(acc => acc.name === account.name)
        if(user){
            console.log(`Account Number already taken`)
            return;
        }
        else{
            this.accounts.push(account)
            this.message = `Welcome to ${this.bankName}`
        }
    }
}
Bank.prototype.closeAccount = function(accountNumber){
    // let account = this.accounts.find(acc => acc.name === accountNumber)
    // if(account){
    //     delete account
    // }
    for(let i=0; i<this.accounts.length; i++){
        if(this.accounts[i] === accountNumber ){
             this.accounts.splice(i, 1)
            return;
        }
    }
}
Bank.prototype.findAccount = function(accountNumber){
    let account = this.accounts.find(acc => acc.name === accountNumber)
    if(!account) return;
    return account
}
Bank.prototype.totalMoney = function(){
    let totalMon = this.accounts.reduce((total, val) => total += val.balance, 0)
    return totalMon
}
Bank.prototype.richestCustomer = function(){
    let richestUser = Math.max(...this.accounts.map(acc =>acc.balance))
   return this.accounts.filter(acc => acc.balance === richestUser)
}
Bank.prototype.customersWithMoreThan = function(amount){
    return this.accounts.filter(acc => acc.balance >amount)
}
Bank.prototype.sortAccounts = function(){
    let sort = this.accounts.sort((a,b) => b.balance - a.balance)
    return sort
}
Bank.prototype.bankReport = function(){
    let richest = this.accounts.find(acc => this.richestCustomer())
    return `
    My Bank: ${this.bankName}
    Customers: ${this.accounts.length}
    Total Money: ${this.totalMoney()}
    Richest Customer: ${richest.name} (${richest.balance})
    `
}
// Bank.prototype.history = function(){
//     this.
// }


const bank = new Bank('First Bank')
bank.openAccount(user1)
bank.openAccount(user2)
bank.openAccount(user3)
// bank.closeAccount(user2)
// console.log(bank.richestCustomer())
// console.log(bank.totalMoney())
// console.log(bank.accounts)
// console.log(bank.customersWithMoreThan(5000))
// console.log(bank.sortAccounts())
// console.log(bank.bankReport())









// ===========================================================
// Inventory store class


class Store{
    constructor(){
        this.items = []
    }
}
Store.prototype.addItem = function(name, price, quantity){
    let object = {
        name:name,
        price:price,
        quantity:quantity
    }
    this.items.push(object)
}
Store.prototype.totalValue = function(){
    let res = this.items.reduce((total, val) => total += (val.quantity * val.price), 0)
    return res
}
Store.prototype.filterExpensive = function(minPrice){
    let expensiveItems = this.items.filter(item => item.price >= minPrice)
    return expensiveItems.map(item => item.name)
}
Store.prototype.applyDiscount = function(percent){
    return this.items.map(item => {
        let per = item.price -(item.price * (percent/100))
        return {
            ...this,
            discount:per
        }
    }
)
}
Store.prototype.mostCommonWord = function(){
    let names = this.items.map(name => name.name)
    return names
}


let store = new Store()
store.addItem('Bread', 5000, 3)
store.addItem('Bread', 5000, 3)
store.addItem('Bread', 5000, 3)
store.addItem('Chair', 15000, 2)
store.addItem('Mope', 1000, 6)
// console.log(store.applyDiscount(10))
// console.log(store.filterExpensive(4000))
// console.log(store.totalValue())
// console.log(store.mostCommonWord())
// console.log(store.items)




// Furniture Price Calculator* 

const furniture = [
  { name: "Sofa", price: 250000 },
  { name: "Table", price: 80000 },
  { name: "Chair", price: 25000 },
  { name: "Bed", price: 180000 }
]

for(let i =0; i<furniture.length; i++){
    let per = furniture[i].price * (15/100)
    let vat = furniture[i].price + per;
     furniture[i].vat = vat
}
// console.log(furniture)



// let i =1;
// let chairs = 50
// while(i < 50){
//     let sales = Math.floor(Math.random() * 5)
//     let remain = (chairs - sales);
    
//     let res = `Day ${i}: Sold ${sales} chairs. Remainig ${remain}`
//     chairs = remain

//     if(remain <0){
//     break
//     }

    
//     console.log(res)
//     i++
// }
// console.log(`Out of stock in ${i} days`)







// async function users(){
//     let userDB = await fetch('https://dummyjson.com/users');
//     let users= await userDB.json()
//     // let userD = users.users.map(user => {
//     //     return user.email
//     // })
//     return users
// }

// async function getUser(id){
//     let userID = await users(id).users.map(user =>{
//         if(user.id === id){
//             return user
//         }
//     })
      
  


//     return userID
// }

// getUser(30).then(user => {
//     console.log(user)
// }).catch('err')





// ONLINE SHOPPING CLASS

class Shopping{
    products = []
    constructor(id, name, price, category, stock, rating){
        this.id = id
        this.name = name
        this.price = price
        this.category = category
        this.stock = stock
        this.rating = rating
        this.isAvailable()

        this.products.push(this)
    }
    updatePrice(newPrice){
        if(newPrice < 0){
            this.message = 'Price cannot be less than $0'
            return;
        }
        this.price = newPrice
    }
    restock(quantity){
         if(quantity < 0){
            this.message = 'Quantity cannot be less than $zero'
            return;
        }
        this.stock += quantity
    }
    buy(quantity){
       if(quantity < 0) {
        this.message = `Quantity cannot be less than zero`
        return;
       }else if(this.stock == 0 || this.isAvailable != true){
        this.message = `Sorry, the product is out of stock`
        return;
       } else if(quantity > this.stock){
        this.message = `Quantity is more than available stock`
       }
        let price = this.price * quantity
        this.wallet -= price
        this.stock -= quantity

    }
    isAvailable(){
        if(this.stock != 0){
            this.isAvailable = true;
            return
        }
        this.isAvailable = false
    }
    displayProduct(){
        console.log(this)
    }

}





let shop = new Shopping()
let pdd1 = new Shopping('100', 'Chair', 15000, 'Furniture', 50, 3)
let pdd2 = new Shopping('101', 'Television', 85000, 'Electric Appliance', 15, 12)
// pdd1.updatePrice(22000)
// pdd1.restock(10)
// pdd1.displayProduct()
// pdd2.displayProduct()

console.log(pdd1.buy(1))
console.log(pdd1)
// console.log(shop.products)



// CUSTOMER CLASS

class Customer{
    constructor(name, email, wallet, cart, orders){
        this.name = name
        this.email = email
        this.wallet= wallet
        this.cart = cart
        this.orders= orders
    }
    deposit(amount){
        if(amount < 0) {
            this.message = "Amount can't be less than $0"
        } 
        this.wallet += amount
    }
    addToCart(product, quantity){
        let prod = shop.products.find(prod => prod.name === product)
        if(!prod) return;
        if(quantity < 0){
            this.message = `Invalid quantity`
        }

        if(this.isAvailable != true || this.stock === 0) {
            this.message = 'Sorry, The product is not available'

        } else if(quantity > this.stock) {
            this.message = `Sorry, the quantity inputed is more than available quantity`
        }
        this.cart += quantity
    }

}

// let cust1 = new Customer('John', 'john@gmail.com', 20000, 0, 0)
// cust1.deposit(200)
// cust1.addToCart('Chair', 5)
// console.log(cust1)












