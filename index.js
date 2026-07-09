
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
   for(let i = 0; i<studentReg.length; i++){
    // if(!studNam) return;
    if(studentReg[i].Name === studNam){
        return studentReg[i]
    }
   }
}




let student1 = new Student('Philip', 23, 'Engineering', [34, 67, 86,100, 55])
let student2 = new Student('Timothy', 23, 'Computer Science', [34, 27, 86,10, 55])
// student2.addScore(100)
console.log(student2.displayInfo('Timothy'))
// console.log(studentReg)