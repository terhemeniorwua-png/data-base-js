
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
        let avr = (this.scores).map(score => score)
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
student2.addScore(100)
// student2.displayInfo('Timothy')
console.log(studentReg)




class School {
    constructor(schooName){
        this.schooName = schooName
        this.students =[]
    }
    addStudents(student){
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
// school.topStudent()
// console.log(school.getPassedStudents())
// console.log(school.getStudentsByCourse('Computer Science'))
// console.log(school.schoolReport())

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


