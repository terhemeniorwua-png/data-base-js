
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
 Student.prototype.getAverage = function(){
        let avr = (this.Scores).map(score => score)
        .reduce((total, score) => total += score)/(this.Scores).length
        return avr
    }
Student.prototype.getGrade = function(){
        if(this.Average <= 40){
           return 'F'
        } else if(this.Average <= 59){
           return 'D'
        } else if(this.Average <= 69){
           return 'C'
        } else{
           return'A'
        }
    }
Student.prototype.hasPassed = function(){
    if(this.Average >= 50){
        return true
    } else{
        return false
    }
}



let student1 = new Student('Philip', 23, 'Engineering', [34, 67, 86,100, 55])
let student2 = new Student('Timothy', 23, 'Engineering', [34, 27, 86,10, 55])
console.log(studentReg)