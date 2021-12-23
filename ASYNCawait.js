
const get = document.querySelector(".getting")
//async await constructor and axios combined use
// const sending = async ()=>{
//     const {data:{token : tk}}= await axios.post("https://reqres.in/api/register",{
//                         email:"eve.holt@reqres.in",
//                         password:"pistol"
//                     })
//     console.log(tk)

// }
//Advance practice
const sending = async ()=>{
    const {data:{data:[tk]}}= await axios.get("https://reqres.in/api/users")
   let {email}= tk
    console.log(email)

}
get.addEventListener("click",sending)

