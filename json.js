// async function users() {
//    let usersFetched= await fetch('https://dummyjson.com/users')
//     let user= await usersFetched.json()
//     let user1 =(user.users).find((val) => val.id ===1)
//    console.log( user1)


//    let sentence = `${user1.firstName}`
//    console.log(sentence)
// }



// let user = ['{"name":"Philip", "age":49, "location":"Benue"}, {"name":"Philip", "age":49, "location":"Benue"}, {"name":"Philip", "age":49, "location":"Benue"}']
// let normalObj = JSON.parse(user)
// console.log(normalObj)
// let sentence = `${normalObj.name} is ${normalObj.age} and lives in ${normalObj.location}`
// console.log(sentence)




// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   owner: {
//     name: "Philip",
//     city: "Benue"
//   },
//   features: [
//     "Air Conditioning",
//     "Bluetooth",
//     "Backup Camera",
//     "Cruise Control"
//   ]
// };
// let toJsonString = JSON.stringify(car, null, 2)
// // console.log(toJsonString)

// let toJSObj = JSON.parse(toJsonString)
// let owner = toJSObj['owner']['name'];
// let secFeature = toJSObj.features[1]

// console.log(secFeature)
// console.log(owner)


// let res = car.brand === toJSObj.brand
// console.log(res)


// Reading a local file

import { readFile } from "node:fs/promises"

async function fet() {
  
try{
  let [student, courses, grades] = await Promise.all([
  readFile("student.json", "utf8"),
  readFile("courses.json", "utf8"),
  readFile("grades.json", "utf8")
]);

const stud = JSON.parse(student);
const cours = JSON.parse(courses);
const grad = JSON.parse(grades)
return [stud, cours, grad]
} catch(e){
  console.log(e.message)
}
}
// fet().then(res => console.log(res))



// Cancelling a fetch Request

async function apiRequest(timout = 2000){
    let abort = new AbortController();
    setTimeout(
      function(){
        abort.abort(new Error('Request was cancelled'))
      }, timout)
  try{
  
    let request = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal: abort.signal
    });
    // cancel(timout)
    
    let call = await request.json()
      console.log(call)

      let numOfPosts = 0;
      call.forEach(val => {
        if(val.body){
          numOfPosts++
        }
      });
      console.log(`The total number of posts is: ${numOfPosts}`)
  } catch(e){
    console.log(e.message)
  }
}

apiRequest()
