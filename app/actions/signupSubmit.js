export const signupSubmit = async(data)=>{
    const email = data.get("email").toLowerCase()
    const username = data.get("username")
    const password = data.get("password")
    const bodydata =  {
        "email":email,
        "username":username,
        "password":password
    }
    console.log(bodydata)
    let a = await fetch("https://node-backend-henna.vercel.app/user/signup",{method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(bodydata)
})
let res = await a.json()
return res.message
}
