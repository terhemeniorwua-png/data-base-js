
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
 this.balance += amount
 this.message = `${amount} successfully deposited to your account`
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
 this.message = `${amount} successfully withdrawn from your account`
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



let user1 = new BankAccount('Philip', 1234, 2000)
let user2 = new BankAccount('Tom', 2222, 2000)
let user3 = new BankAccount('Tom', 5222, 2000)
user1.deposit(2000)
user2.changePin(2222, 2323)
user2.changePin(2323, 1111)
user2.changePin(1111, 9089)
// user1.withdraw(3000, 1234)
// user1.transfer(user2, 2500, 1234)
// console.log(user2.checkBalance(9089))
// user2.accountInfo()
// console.log(user1, user2)



class Bank{
    
    constructor(bankName){
        this.bankName = bankName
        this.accounts = []
    }
    openAccount(account){
        let user = this.accounts.find(acc => acc.name === account.name)
        if(user){
            console.log(`Username already taken`)
            return;
        }
        else{
            this.accounts.push(account)
            this.message = `Welcome to ${this.bankName}`
        }
    }
}



const bank = new Bank('First Bank')
bank.openAccount(user1)
bank.openAccount(user2)
bank.openAccount(user3)
console.log(bank.accounts)


















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


