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




const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  owner: {
    name: "Philip",
    city: "Benue"
  },
  features: [
    "Air Conditioning",
    "Bluetooth",
    "Backup Camera",
    "Cruise Control"
  ]
};
let toJsonString = JSON.stringify(car, null, 2)
// console.log(toJsonString)

let toJSObj = JSON.parse(toJsonString)
let owner = toJSObj['owner']['name'];
let secFeature = toJSObj.features[1]

// console.log(secFeature)
// console.log(owner)


// let res = car.brand === toJSObj.brand
// console.log(res)


async function fet() {
let [student, courses, grades] = await Promise.all([
  fetch("student.json"),
  fetch("courses.json"),
  fetch("grades.json")
]);
// return await (student, courses, grades).json()
// console.log(res)
const stud = student.json();
const cours = courses.json();
const grad = grades.json()
return [stud, cours, grad]
}

fet().then(res =>{
  console.log(res)
})




// async function apiRequest(){
//   try{
//     // let abort = new AbortController();
//     // if(setTimeout(
//     //   function(){
        
//     //   }, 2000)){
//     //     abort.abort('Request was cancelled.')
//       }


//     let request = await fetch('https://jsonplaceholder.typicode.com/posts');
//       if(!request.ok){
//         throw new Error('Something went wrong')
//       }
//     let call =await request.text()
//       console.log(call)
//   } catch(e){
//     console.log(e.message)
//   }
// }
  
// apiRequest()
