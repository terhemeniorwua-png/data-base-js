'use strict'


  let staffs = [
        {name:'Joe', id:211, password:4443, class:'200', email:'joe@gmail.com'},
        {name:'Mut', id:212, password:6390, class:'100', email:'joe@gmail.com'},
        {name:'Mattew', id:213, password:4523, class:'300', email:'joe@gmail.com'},
        {name:'Charles', id:214, password:4534, class:'400', email:'joe@gmail.com'},
        {name:'Lamel', id:215, password:5344, class:'500', email:'joe@gmail.com'}
    ]

   let students = [
        {name:'Tom', id:115, class:'500', email:'joe@gmail.com', performance:{}}
    ]


class Staff{
    constructor(name, id, pass){
        this.name = name
        this.id = id
        this.password = pass
        

        staffs.push(this)
    }
     signUp(name, id, pass){
        let staff = staffs.find(staff => staff.id === id)
        if(staff){
             console.log('Staff already exist, Login!')
            return
        }
         new Staff(name, id, pass)
    }
      logIn(id, pass){
        let staff = staffs.find(staff => {
            if(id === staff.id && pass === staff.password){
                return staf
            }
        })
         if(!staff){
             console.log('Not a Staff? Visit admin to sing up!')
            return;
        }
        console.log(staff)
    }
    studentDisplay(id, clas){
         let staff = staffs.find(staff => {
            if(id === staff.id && clas === staff.class){
                return staf
            }})
            if(!staff){
                console.log('You are not authorized to access this feature')
                return;
            }
            
            let stud = students.filter(student => student.class === clas)
            console.log(stud)
        }
        performanceUpdate(staffID, clas, studID, score1, score2, score3){
            let staff = staffs.find(staff => {
            if(staffID === staff.id && clas === staff.class){
                return staf
            }})
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

let staf = new Staff
staf.signUp('Phil', 101, 232)
// staf.logIn(111, 4443)
// staf.studentDisplay(215, '500')
// console.log(staffs)







class Student{
    constructor(name, id, pass, clss, email){
        this.name = name
        this.id = id
        this.password = pass
        this.class = clss
        this.email = email
        this.performance={}


        students.push(this)
        
    }
    signUp(name, id, pass, clas, email){
        let student = students.find(student => student.id === id)
        if(student){
             console.log('Student already exist, Login!')
            return
        }
         new Student(name, id, pass, clas, email)
    }
    logIn(id, pass){
        let student = students.find(student => {
            if(id === student.id && pass === student.password){
                return student
            }
        })
         if(!student){
             console.log('Not a student? SingUp!')
            return;
        }
        console.log(student)
    }
    checkPerf(id, pass){
           let student = students.find(student => {
            if(id === student.id && pass === student.password){
                return student
            }
        })
         if(!student){
             console.log('Not a student? SingUp!')
            return;
        }
        console.log(student.performance)
    }
    changeInfo(id, oldPass, newPass){
        let passLength = String(newPass)

         let student = students.find(student => {
            if(id === student.id && oldPass === student.password){
                return student
            } })


            if(passLength.length != 4){
                console.log('Password must be 4 characters')
                return;
            }
            let newPassword = Number(passLength)
           return student.password = newPassword
    }
}




let schStudent = new Student
schStudent.signUp('Fray', 104, 4444, '500', 'pl@gmail.com')
schStudent.signUp('Peter', 101, 8787, '200', 'peter@gmail.com')
schStudent.signUp('Peter', 103, 4787, '300', 'peter@gmail.com')
schStudent.signUp('Wisdom', 102, 9012, '100', 'wisdom@gmail.com')
// schStudent.logIn(104, 4444)
// schStudent.checkPerf(101, 8787)
// schStudent.changeInfo(101, 8787, 4435)


staf.performanceUpdate(212, '100', 102, 70, 64, 70)
staf.performanceUpdate(211, '200', 101, 60, 64, 90)
staf.performanceUpdate(213, '300', 103, 89, 54, 80)
staf.performanceUpdate(214, '400', 102, 69, 74, 91)
// staf.performanceUpdate(215, '500', 105, 78, 54, 67)
staf.performanceUpdate(214, '500', 104, 58, 54, 97)
// staf.studentDisplay(215, '500')


console.log(students)