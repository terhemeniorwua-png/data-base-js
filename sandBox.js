'use strict'



  let staffs = [
        {name:'Joe', id:211, password:4443, class:'200', email:'joe@gmail.com'},
        {name:'Mut', id:212, password:6390, class:'100', email:'joe@gmail.com'},
        {name:'Mattew', id:213, password:4523, class:'300', email:'joe@gmail.com'},
        {name:'Charles', id:214, password:4534, class:'400', email:'joe@gmail.com'},
        
// 
    ]

   let students = [
        {name:'Tom', id:115, class:'500', email:'joe@gmail.com', performance:{}}
    ]

    

class Staff{
    constructor(name, id, pass){
        this.name = name
        this.id = id
        this.password = pass
    }

     static signUp(name, id, pass){
        let staff = staffs.find(staff => staff.id === id)
        if(staff){
             console.log('Staff already exist, Login!')
            return;
        }
        let newStaff= new Staff(name, id, pass)
         staffs.push(newStaff)
         console.log('Sign Up successful, Login!')
    }
     static logIn(id, pass){
        let staff = staffs.find(staff => id === staff.id && pass === staff.password)
         if(!staff){
             console.log('Not a Staff? Visit admin to sing up!')
            return;
        }
        console.log(`Welcome back ${staff.name}`)
        console.log(staff)
    }
    static studentDisplay(id, clas){
         let staff = staffs.find(staff => id === staff.id && clas === staff.class)
            if(!staff){
                console.log('You are not authorized to access this feature')
                return;
            }
            
            let stud = students.filter(student => student.class === clas)
            console.log(stud)
        }
        static performanceUpdate(staffID, clas, studID, score1, score2, score3){
            let staff = staffs.find(staff => staffID === staff.id && clas === staff.class)
            if(!staff){
                console.log('You are not authorized to access this feature')
                return;
            }
             let stud = students.find(student => {
            if(studID === student.id){
                return student
            }})
            stud.performance = {
                Eng:score1,
                Chem:score2,
                Bio:score3
            }

        }
}





class Student{
    constructor(name, id, pass, clss, email){
        this.name = name
        this.id = id
        this.password = pass
        this.class = clss
        this.email = email
        this.performance={}


        
        
    }
     static signUp(name, id, pass, clas, email){
        let student = students.find(student => student.id === id)
        if(student){
             console.log('Student already exist, Login!')
            return
        }
         let newStudent =new Student(name, id, pass, clas, email)
         students.push(newStudent)
    }
    static logIn(id, pass){
        let student = students.find(student => id === student.id && pass === student.password)
         if(!student){
             console.log('Not a student? SingUp!')
            return;
        }
        console.log(student)
    }
    checkPerf(id, pass){
           let student = students.find(
            student => id === student.id && pass === student.password)
         if(!student){
             console.log('Not a student? SingUp!')
            return;
        }
        console.log(student.performance)
    }
    changeInfo(id, oldPass, newPass){
        let passLength = String(newPass)

         let student = students.find(
            student => id === student.id && oldPass === student.password)
            if(!student){
                console.log('Invalid login')
                return;
            }

            if(passLength.length != 4){
                console.log('Password must be 4 characters')
                return;
            }
            let newPassword = Number(passLength)
           return student.password = newPassword
    }
}




 
let student1 = Student.signUp('Fray', 104, 4444, '500', 'pl@gmail.com')
let student2 = Student.signUp('Peter', 101, 8787, '200', 'peter@gmail.com')
let student3 = Student.signUp('Peter', 103, 4787, '300', 'peter@gmail.com')
let student4 = Student.signUp('Wisdom', 102, 9012, '100', 'wisdom@gmail.com')






let staff1= Staff.signUp('Phil', 101, 2324)
// Staff.logIn(211, 4443)
Staff.studentDisplay(211, '200')
// console.log(staffs)


// Student.checkPerf(102, 9012)
// Student.logIn(211, 4443)
// schStudent.changeInfo(101, 8787, 4435)
// console.log(students)


// Staff.performanceUpdate(212, '100', 102, 70, 64, 70)
Staff.performanceUpdate(211, '200', 101, 60, 64, 90)
// Staff.performanceUpdate(213, '300', 103, 89, 54, 80)
// Staff.performanceUpdate(214, '400', 102, 69, 74, 91)
// Staff.performanceUpdate(215, '500', 105, 78, 54, 67)
// Staff.performanceUpdate(214, '500', 104, 58, 54, 97)
// Staff.studentDisplay(215, '500')