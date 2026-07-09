
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
let student2 = new Student('Timothy', 23, 'Computer Science', [34, 27, 86,10, 55])
let student3 = new Student('Joy', 23, 'Computer Science', [100, 87, 86,90, 55])
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
}
let school = new School('path-finders')

school.removeStudent('Timothy')
school.addStudents('Philip')
school.addStudents('Joy')
school.addStudents('Hwee')
school.topStudent()
// console.log(school)