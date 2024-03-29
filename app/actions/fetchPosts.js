export default async function fetchPosts(){
    let a = await fetch("https://node-backend-henna.vercel.app/posts")
    let res = await a.json()
    return res
}