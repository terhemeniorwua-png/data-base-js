
let studentReg = [];

class Student{
    constructor(name, age, course, scores){
        this.Name = name
        this.Age = age
        this.Course = course
        this.Scores = scores
        this.Average = this.getAverage()
        this.Grade = this.getGrade()
        this.hasPassed = hasPassed()

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
           return this.Grade = 'F'
        } else if(this.Average <= 59){
           return this.Grade = 'D'
        } else if(this.Average <= 69){
           return this.Grade = 'C'
        } else{
           return this.Grade ='A'
        }
    }
Student.prototype.hasPassed = function(){
    
}



let student1 = new Student('Philip', 23, 'Engineering', [34, 67, 86,100, 55])
let student2 = new Student('Timothy', 23, 'Engineering', [34, 27, 86,10, 55])
console.log(studentReg)