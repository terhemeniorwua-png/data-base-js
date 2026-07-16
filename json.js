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
console.log(toJsonString)

let toJSObj = JSON.parse(toJsonString)
let owner = car['owner']['name'];
let secFeature = car['features']
.map((val, indx) => {
    if(indx === 1)
         console.log(val)
})
console.log(owner)


let res = toJsonString.brand === toJSObj.brand
console.log(res)