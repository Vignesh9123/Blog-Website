export const onSubmit=async(data) => {
    let response = await fetch("https://node-backend-henna.vercel.app/comments/add",{method:"POST",
     headers:{"Content-Type": "application/json"},
     body:JSON.stringify(data)
  })
     let res = await response.json()
     location.reload()
  }