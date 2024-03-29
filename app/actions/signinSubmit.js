export default async function signinSubmit(data){
    let a = await fetch("https://node-backend-henna.vercel.app/user/signin",{method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(data)})
    let  res = await a.json()
    return res.message 
}