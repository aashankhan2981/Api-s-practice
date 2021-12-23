// const send = document.querySelector(".sending")
// const get = document.querySelector(".getting")

// const getting = ()=>{
//     let url = "https://breakingbadapi.com/api/character/random"
//     fetch(url).then((content)=>content.json()).then((content)=>console.log(content))
//     .catch(error => {console.log("I am error")})
// }
// get.addEventListener("click",getting)
// const sending = ()=>{
//     let url = "https://reqres.in/api/register"
//     let param = {
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body : JSON.stringify({email:"eve.holt@reqres.in",
//         password:"pistol"}) 
//     }
//     fetch(url,param).then((response)=>response.json()).then((content)=>console.log(content))
//     .catch((error)=>{console.log("I am error",error)})
// }
// send.addEventListener("click",sending)