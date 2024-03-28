"use server"
import mongoose from "mongoose";
import Comments from "@/app/models/commentsSchema"
export default async function dbConnect(){
mongoose.connect(process.env.MONGODB_URI,{dbName:"Sample_comm"}).then(async()=>{
    console.log("Connected");
})
.catch(e=>{console.log("Mongoose error",e);})
}
