
let studentReg = [];

class Student{
    constructor(name, age, course, scores){
        this.Name = name
        this.Age = age
        this.Course = course
        this.Scores = scores
        this.Average = this.getAverage()


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
            this.Grade = 'F'
        } else if(this.Average <= 59){
            this.Grade = 'D'
        } else if(this.Average <= 69){
            this.Grade = 'C'
        } else{
            this.Grade ='A'
        }
    }


let student1 = new Student('Philip', 23, 'Engineering', [34, 67, 86,100, 55])
let student2 = new Student('Timothy', 23, 'Engineering', [34, 27, 86,10, 55])
console.log(studentReg)