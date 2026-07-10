
let studentReg = [];

class Student{
    constructor(name, age, course, scores){
        this.Name = name
        this.Age = age
        this.Course = course
        this.Scores = scores
        this.Average = this.getAverage()
        this.Grade = this.getGrade()
        this.Passed = this.hasPassed()

        studentReg.push(this)
    }
}
Student.prototype.addScore = function(addedScore){
    this.Scores.push(addedScore)
}
 Student.prototype.getAverage = function(){
        let avr = (this.Scores).map(score => score)
        .reduce((total, score) => total += score)/(this.Scores).length
        return avr
    }
Student.prototype.getGrade = function(){
        if(this.Average <= 40){
           return 'F'
        } else if(this.Average < 50){
           return 'D'
        } else if(this.Average < 60){
           return 'C'
        } else if(this.Average < 70){
           return 'B'
        } else if(this.Average <=100){
            return 'A'
        }else{
           return'NIL'
        }
    }
Student.prototype.hasPassed = function(){
    if(this.Average >= 50){
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
student2.addScore(50)
// student2.displayInfo('Timothy')
// console.log(studentReg)




class School {
    constructor(schooName){
        this.schooName = schooName
        this.studen =[]
    }
    addStudents(student){
       for(let stud of studentReg){
        if(stud.Name === student){
            (this.studen).push(stud)
        }
       }
    }

    removeStudent(stuName){
         for(let stud of this.studen){
        if(stud.Name === stuName){
            (this.studen).pop(stuName)
        }
       }
    }
    findStudent(name){
    return this.studen.find(student => {
        if(student.Name === name){
            return student
        }
    })
    }

    topStudent(){
      let maxAverage = Math.max(...this.studen.map(student => student.Average))
      this.studen.forEach(student =>{
        if(student.Average === maxAverage){
            console.log(student)
        }
      })
    }

    getPassedStudents(){
        return this.studen.filter(student => student.Passed === true)
    }

    getStudentsByCourse(course){
        return this.studen.filter(student => student.Course === course)
    }

    schoolReport(){
let report = `
School: ${this.schooName}
Total Students: ${this.studen.length}
Passed: ${this.getPassedStudents().length}
Failed: ${this.studen.length - this.getPassedStudents().length}
Top Student: 
        `

        return report
    }
}





let school = new School('path-finders')

school.addStudents('Timothy')
school.addStudents('Philip')
school.addStudents('Joy')
school.addStudents('Hwee')
// school.topStudent()
// console.log(school.getPassedStudents())
// console.log(school.getStudentsByCourse('Computer Science'))
console.log(school.schoolReport())

// console.log('==========================')
// console.log(school)























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


