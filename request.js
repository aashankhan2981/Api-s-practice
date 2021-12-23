const send = document.querySelector(".sending")
const get = document.querySelector(".getting")
const sendingRequest = (method, url,newData) => {
    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.open(method, url)//ye prepare karta hai request ko
        xhr.responseType = "json"
        
        xhr.setRequestHeader("Content-Type","application/json")
        //ye header isliye ke jab me data add karronga tu mjy uski type batani hogi ke ye json data hai
        xhr.onload = () => {//onload ik property hai ye tab call hoty hai jb server respond krta hai 
            const data = xhr.response // ye server response hai jo json se js me convert hoke data me store hogaya
            if(xhr.status>=400){//server ke response ke status hoty hai  mainly greater than 400 hoty hai errors ke liye
                reject(data)
            }
            else{
                resolve(data)
        }}
        xhr.onerror = ()=>{//onerror bhi ik property hai ye tb call hoty  hai jb request server tk pohanch hi nhi sakti ya
            //kisi or waja se server respond hi nhi karta ya hum tk uska response hi nhi pohanchta
            reject("SOMETHING WENT WRONG!")
        }
        xhr.send(JSON.stringify(newData))// yaha pe server ko request chally jaty hai
        }
    )
    return promise

        }

    



const getData = () => {
    sendingRequest("GET", "https://breakingbadapi.com/api/character/random").then((response) => {
        console.log("THis is response of server", response)
    }).catch((err) => {
        console.log(err)
    })
}
const sendData = () => {
    sendingRequest("POST", "https://reqres.in/api/register",{
        email:"eve.holt@reqres.in",
        password:"pistol"
    }).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })
}
get.addEventListener("click", getData)
send.addEventListener("click", sendData)
