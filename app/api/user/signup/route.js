import { NextResponse } from "next/server";
import Users from "@/app/models/userSchema";
import bcrypt from "bcrypt"
export async function POST(request){
    let body = await request.json()
    const {email,username,password} = body
    // let userExists = await Users.findOne({email})
    // if(userExists){
    //     return NextResponse.json({"message":"User already Exists"})
    // }
    // userExists = await Users.findOne({username})
    // if(userExists){
    //     return NextResponse.json({"message":"Username exists"})
    // }
    // const hashedPassword = await bcrypt.hash(password,10)
    // let createUser = await Users.create({
    //     email,username,password:hashedPassword
    // })
    // if(createUser){
    //     createUser.password = undefined
    //     return NextResponse.json({"message":"Success","user":createUser})
    // }
    return NextResponse.json({"message":"Something went wrong","email",email})
}
