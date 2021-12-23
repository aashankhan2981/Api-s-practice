// const send = document.querySelector(".sending")
// const get = document.querySelector(".getting")
// const sendingRequest = (method,url,data)=>{
//     return new Promise((resolve,reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open(method,url)
//         xhr.responseType= 'json'
//         xhr.setRequestHeader("Content-Type","application/json")
//         xhr.onload = ()=>{
//         if(xhr.status>=400){
//             reject(xhr.response)
//         }
//         else{
//             resolve(xhr.response)
//         }
//     }   
//         xhr.send(JSON.stringify(data))
//     })
    
// }
// const sending= ()=>{
//     sendingRequest("POST", "https://reqres.in/api/register",{
//         email:"eve.holt@reqres.in",
//         password:"pistol"
//     }).then((data)=>{
//         console.log(data)
//     }).catch((data)=>{
//         console.log("There is some error")
//         console.log(data)
//     })
// }
// const gettting = ()=>{
//     sendingRequest("GET","https://breakingbadapi.com/api/character/random").then((data)=>{
//         console.log(data)
//     }).catch((data)=>{
//         console.log("There is some error")
//         console.log(data)
//     })
// }


// send.addEventListener("click",sending)
// get.addEventListener("click",gettting)