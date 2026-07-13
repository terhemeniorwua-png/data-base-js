'use strict'


  let staffs = [
    {name:'Joe', id:111, class:'200', email:'joe@gmail.com'},
        {name:'Mut', id:112, class:'100', email:'joe@gmail.com'},
        {name:'Mattew', id:113, class:'300', email:'joe@gmail.com'},
        {name:'Charles', id:114, class:'400', email:'joe@gmail.com'}
    ]

   let students = [
        {name:'Tom', id:115, class:'500', email:'joe@gmail.com'}
    ]

class Staff{
    constructor(name, id, pass){
        this.name = name
        this.id = id
        this.password = pass
        

        staffs.push(this)
    }
}

let staf = new Staff('Phil', 101, 232)
console.log(staffs)

class Student{
    constructor(name, id, clss, email){
        this.name = name
        this.id = id
        this.class = clss
        this.email = email
        


        students.push(this)
        
    }
    signUp(name, id, clas, email){
        let student = students.find(student => student.id === id)
        if(student){
             console.log('Student already exist, Login!')
            return
        }
         new Student(name, id, clas, email)
    }
    logIn(id){
        let student = students.find(student => student.id === id)
         if(!student){
             console.log('Not a student? SingUp!')
            return;
        }
        console.log(student)
    }
}




let schStudent = new Student
schStudent.signUp('Fray', 104, '500', 'pl@gmail.com')
schStudent.signUp('Peter', 101, '200', 'peter@gmail.com')
schStudent.signUp('Wisdom', 102, '100', 'wisdom@gmail.com')
// schStudent.logIn(120)

console.log(students)
