
// let div = document.querySelector(".dynamic")
// const get = document.querySelector(".getting")
// const send = document.querySelector(".sending")
// const updating = document.querySelector(".updating")
// const creating = (users)=>{
//     // console.log(users.data)
//     let elements =""
    
//     users.forEach((val)=>{
//       elements +=  `<div class="div-title"><h3>${val.title}</h3><ul class="list"><li>${val.id}</li><li>${val.id}</li></ul></div>`
//     })
//     //jis block ya divion me editing krni haina usse document.querySelector().innerHTML krlena hai
//     document.querySelector('.dynamic').innerHTML = elements
// }
// const sendcreat = (val)=>{
//     let elements = ''
//     elements +=  `<div class="div-title"><h3>${val.token}</h3><ul class="list"><li>${val.id}</li></ul></div>`
    
//     //jis block ya divion me editing krni haina usse document.querySelector().innerHTML krlena hai
//     document.querySelector('.dynamic').innerHTML = elements
// }
// const getdata = ()=>{
//     //?_limit=5 this make sure that only 5 user data should be pushed to screen
//     axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5").then((response)=>response.data).then(creating)
//     .catch((error)=>console.error(error,"I am error"))
// }
// const sendData = ()=>{
//     axios.post("https://reqres.in/api/register",{
//                 email:"eve.holt@reqres.in",
//                 password:"pistol"
//             }).then((response)=>response.data).then(sendcreat)
// }
// isse pe api prse ya data 
// const updated = ()=>{
    // put jo hai wo data ko isse replace karde ga
//     axios.put("https://jsonplaceholder.typicode.com/posts/1",{
//         Name:"Aashan",description:"the updated one"
//     }).then((response)=>console.log(response.data))
// const updated = ()=>{
//     // patch se data pichle me increment hogaye ga
//         axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
//             Name:"Aashan",description:"the updated one"
//         }).then((response)=>console.log(response.data))
// }
// const updated = ()=>{
//     // delete se data delete
//         axios.delete("https://jsonplaceholder.typicode.com/posts/1",{
//             Name:"Aashan",description:"the updated one"
//         }).then((response)=>console.log(response.data))
// }
// const updated = ()=>{
//     // patch se data pichle me increment hogaye ga
//         axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
//             Name:"Aashan",description:"the updated one"
//         }).then((response)=>console.log(response.data))
// }
// const all = ()=>{
//     //ab isme hum array of request bejsakty hai matlab multliple requests
//     axios.all([axios.get("https://jsonplaceholder.typicode.com/posts"),axios.get("https://jsonplaceholder.typicode.com/users")])
//     // .then((response)=>console.log(response[0]))
//     // ab is step ke ik******* imporatant***** bat ab dekh is case me response me ik array aye hain jisme
//     // 2 responses hai tu hum ab asy cases me spread use karty hai jo humary
//     // array ko spread kardeta hai 
//     .then(axios.spread((posts,users)=>{
//         // console.log(posts)
//         console.log(users)

//     }))
// }
//basically interceptor jo hai wo ik request ke darmian me agar hum
// agar kuch display ya kuch print karna hai hu tu hum interceptor use karty hai
// iska pehla argument bhi call back or dusra bhi callback hota hai
// config me object or config 
// axios.interceptors.request.use((config)=>{
//     console.log(`Request send for ${config.method.toUpperCase()} to ${config.url} at ${new Date().getTime()}`)
//     return config
// },error => {
//     Promise.reject(error)}
//     )

// get.addEventListener("click",getdata)
// send.addEventListener("click",sendData)
// updating.addEventListener("click",all)
 

